import { normalize } from "path/posix";
import { BaseDatabase } from "../database/BaseDatabase";
import { UserDatabase } from "../database/UserDatabase";
import { CommentsDB, CommentsLikesDislikesDB, PostsDB, PostsLikesDislikesDB } from "../types";


export class PostDatabase extends BaseDatabase {
    public static TABLE_USERS = "users"
    public static TABLE_POSTS = "posts"
    public static TABLE_COMMENTS = "comments"
    public static TABLE_POSTS_LIKESDISLIKES = "posts_likes_dislikes"
    public static TABLE_COMMENTS_LIKESDISLIKES = "comments_likes_dislikes"



    public getAllPosts = async () => {
        const result = await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .select()

        return (
            result
        )
    } 
    
    public insertPosts = async (postDB: PostsDB): Promise<void> => {
        await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .insert(postDB)
    }


    public getCreatePosts = async () => {
        const postDB = await this.getAllPosts()
        const userDB = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select() 

        return {
            userDB, postDB
        }
    }


    public createComments = async (newComment: CommentsDB) => {
        await BaseDatabase
        .connection(PostDatabase.TABLE_COMMENTS)
        .insert(newComment)
    }
        

    public updateLikesAndDislikesPosts = async (updateLikesPosts: PostsLikesDislikesDB) => {
        await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS_LIKESDISLIKES)
        .insert(updateLikesPosts)
    } 

    public updateLikesAndDislikesComments = async (commentsLikesPosts: CommentsLikesDislikesDB) => {
        await BaseDatabase
        .connection(PostDatabase.TABLE_COMMENTS_LIKESDISLIKES)
        .insert(commentsLikesPosts)
    } 




    
}