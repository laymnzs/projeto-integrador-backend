import { GetPostsInput } from "../dtos/postDTO";
import { BadRequestError } from "../errors/BadRequestError";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";
import { PostDatabase } from "../database/PostDatabase";

export class PostBusiness {
    constructor(
        private postDatabase: PostBusiness,
        private idGenerator: IdGenerator,
        private tokenManager: TokenManager
    ) {}

    
}

