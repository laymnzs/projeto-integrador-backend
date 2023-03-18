import { CreateCommentsInput, CreatePostsInput, GetPostsInput, LikesAndDislikesInput } from "../dtos/postDTO"
import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"



export class PostController {

    constructor(
        private postsBusiness: PostBusiness
    ) {}

    public getPosts = async (req: Request, res: Response) => {
        try {
            const input: GetPostsInput = {
                token: req.headers.authorization
            }

            const output = await this.postsBusiness.getPosts(input)
            res.status(200).send(output)

        } catch (error) {
            console.log(error)

            if (req.statusCode === 200) {
                res.status(500)
            }

            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }

    }

    public createPosts = async (req: Request, res: Response) => {
        try {
            const input: CreatePostsInput = {
                token: req.headers.authorization,
                comment: req.body.comment
            }
            const output = await this.postsBusiness.createPosts(input)
            res.status(200).send(output)

        } catch (error) {
            console.log(error)

            if (req.statusCode === 200) {
                res.status(500)
            }

            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }

    }

    public createComments = async (req: Request, res: Response) => {
        try {
            const input: CreateCommentsInput = {
                postId: req.body.postId,
                comment: req.body.comment,
                token: req.headers.authorization
            }
            const output = await this.postsBusiness.createComments(input)
            res.status(200).send(output)

        } catch (error) {
            console.log(error)

            if (req.statusCode === 200) {
                res.status(500)
            }

            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }

    public likesAndDislikes = async (req: Request, res: Response) => {
        try {
            const input: LikesAndDislikesInput = {
                idLikesAndDislikes: req.body.idLikesAndDislikes,
                likes: req.body.likes,
                dislikes: req.body.dislikes,
                token: req.headers.authorization
            }
            const output = await this.postsBusiness.likesAndDislikes(input)
            res.status(200).send(output)
        } catch (error) {
            console.log(error)

            if (req.statusCode === 200) {
                res.status(500)
            }

            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
}
