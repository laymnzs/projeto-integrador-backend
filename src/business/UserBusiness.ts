import { UserDatabase } from "../database/UserDatabase";
import { LoginInputDTO, LoginOutputDTO, SignupInputDTO, SignupOutputDTO } from "../dtos/userDTO";
import { BadRequestError } from "../errors/BadRequestError";
import { NotFoundError } from "../errors/NotFoundError";
import { Users } from "../models/users";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";
import { TokenPayload } from "../types";


export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private tokenManager: TokenManager,
        private hashManager: HashManager
    ) {}

    public signup = async (input: SignupInputDTO): Promise<SignupOutputDTO> => {
        const { name, email, password } = input

        if (typeof name !== "string") {
            throw new BadRequestError("'name' deve ser string")
        }

        if (typeof email !== "string") {
            throw new BadRequestError("'email' deve ser string")
        }

        if (typeof password !== "string") {
            throw new BadRequestError("'password' deve ser string")
        }

        const emailExist = await this.userDatabase.findByEmail(email)

        if (emailExist) {
            throw new BadRequestError("'email' já existe")
        }

        const id = this.idGenerator.generate()
        const hashedPassword = await this.hashManager.hash(password)
        const createdAt = new Date().toISOString()


        const newUser = new Users(
            id,
            name,
            email,
            hashedPassword,
            createdAt
        )

        const userDB = newUser.toUsersDBModel()

        await this.userDatabase.insertUsers(userDB)

        const payload: TokenPayload = {
            id: newUser.getId(),
            name: newUser.getName()
        }


        const output: SignupOutputDTO = {
            token: this.tokenManager.createToken(payload)
        }

        return output
    }

    public login = async (input: LoginInputDTO): Promise<LoginOutputDTO> => {
        const { email, password } = input

        if (typeof email !== "string") {
            throw new BadRequestError("'email' deve ser string")
        }

        if (typeof password !== "string") {
            throw new BadRequestError("'password' deve ser string")
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if (!userDB) {
            throw new NotFoundError("'email' não cadastrado")
        }

        const user = new Users(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.created_at
        )

        const hashedPassword = user.getPassword()

        const PasswordCorrect = await this.hashManager
            .compare(password, hashedPassword)
        
        if (!PasswordCorrect) {
            throw new BadRequestError("'password' incorreto")
        }

        const payload: TokenPayload = {
            id: user.getId(),
            name: user.getName()
        }

        const token = this.tokenManager.createToken(payload)

        const output: LoginOutputDTO = {
            token
        }

        return output

        }

    }
    





