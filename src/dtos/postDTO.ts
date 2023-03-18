import { PostsDB } from "../types";


export interface GetPostsInput{
    token: string |  undefined
}

export interface CreatePostsInput{
    comment: string 
    token: string | undefined,
}

export interface CreateCommentsInput{
   postId: string,
   comment: string,
   token: string | undefined
}

export interface LikesAndDislikesInput{
    idLikesAndDislikes: string, 
    likes: string,
    dislikes: string,
    token: string | undefined
}
