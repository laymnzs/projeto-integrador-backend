import { CommentsCreateDB, CommentsDB, CommentsModel, PostsDB, PostsModel } from "../types"

export class Posts {
    constructor(
        private id: string,
        private content: string,
        private comment: string,
        private likes: number,
        private dislikes: number,
        private createdAt: string,
        private user: {id: string, name:string},
        private post_comment: CommentsCreateDB 
    ) {}

    //GET: pegar usuario (ID)
    //SET: altera ID

    public getId(): string {
        return this.id
    }
    
    public setId(value: string): void {
        this.id = value
    }

    public getContent(): string {
        return this.content
    }
    
    public setContent(value: string): void {
        this.content = value
    }

    public getComment(): string {
        return this.comment
    }
    
    public setComment(value: string): void {
        this.comment = value
    }

    public getLikes(): number {
        return this.likes
    }
    
    public setLikes(value: number): void {
        this.likes = value
    }

    public getDislikes(): number {
        return this.dislikes
    }
    
    public setDislikes(value: number): void {
        this.dislikes = value
    }


    public getCreatedAt(): string {
        return this.createdAt
    }
    
    public setCreatedAt(value: string): void {
        this.createdAt = value
    }

    public getUser(): {
            id: string,
            name: string,
    }
         {
            return this.user
        }
   
    
    public setUser(value: {id: string, name: string}) {
        this.user = value
    }


    public toPostsDBModel(): PostsDB {
        return {
            id: this.id,
            user_id: this.user.id,
            content: this.content,
            comment: this.comment,
            likes: this.likes,
            dislikes: this.dislikes,
            created_at: this.createdAt
        }
    }

    public toPostsBusinessModel(): PostsModel {
        return {
            id: this.id,
            userId: this.user.id,
            content: this.content,
            comment: this.comment,
            likes: this.likes,
            dislikes: this.dislikes,
            createdAt: this.createdAt
        }
    }



    public toCommentsDBModel(): CommentsDB {
        return {
            id: this.id,
            user_id: this.user.id,
            post_id: this.post_comment.post_id,
            comment: this.comment,
            likes: this.likes,
            dislikes: this.dislikes,
            created_at: this.createdAt
        }
    }

    public toCommentsBusinessModel(): CommentsModel {
        return {
            id: this.id,
            userId: this.user.id,
            postId: this.post_comment.id,
            comment: this.comment,
            likes: this.likes,
            dislikes: this.dislikes,
            createdAt: this.createdAt
        }
    }

    
}