export interface TokenPayload {
    id: string,
	name: string
}

export interface UsersDB {
    id: string,
    name: string,
    email: string,
    password: string,
    created_at: string
}

export interface UsersModel {
    id: string,
    name: string,
    email: string,
    password: string,
    createdAt: string
}

export interface PostsDB {
    id: string,
    user_id: string,
    content: string,
    comment: string,
    likes: number,
    dislikes: number,
    created_at: string
}

export interface PostsModel {
    id: string,
    userId: string,
    content: string,
    comment: string,
    likes: number,
    dislikes: number,
    createdAt: string
}

export interface PostsCreateDB {
    id: string,
    content: string,
    comment: number,
    likes: number,
    dislikes: number,
    created_at: string,
    user:{id: string, name: string}
}

export interface CommentsDB {
    id: string,
    user_id: string,
    post_id: string,
    comment: string,
    likes: number,
    dislikes: number,
    created_at: string
}

export interface CommentsModel {
    id: string,
    userId: string,
    postId: string,  
    comment: string,
    likes: number,
    dislikes: number,
    createdAt: string
}

export interface CommentsCreateDB {
    id: string,
    post_id: string,
    comment: string,
    likes: number,
    dislikes: number,
    created_at: string,
    user:{user_id: string, name: string}
}

export interface PostsLikesDislikesDB {
    user_id: string,
    post_id: string,
    likes: number
}

export interface PostsLikesDislikesModel {
    userId: string,
    postId: string,
    likes: number
}

export interface CommentsLikesDislikesDB {
    user_id: string,
    comment_id: string,
    likes: number
}

export interface CommentsLikesDislikesModel {
    userId: string,
    commentId: string,
    likes: number
}

