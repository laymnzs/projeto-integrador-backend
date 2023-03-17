import { UsersModel } from "../types";

export interface SignupInputDTO {
    name: unknown,
    email: unknown,
    password: unknown
}

export interface SignupOutputDTO {
    token: string
}

export interface LoginInputDTO {
    email: unknown,
    password: unknown
}

export interface LoginOutputDTO {
    token: string
}

export interface GetInputPostsDTO {
    token: string
}

export interface CreatedPosInputPostsDTO {
    token: string | undefined
}

export interface LikesAndDislikesPostsDTO {
    idLikesAndDislikes: string,
    token: string | undefined,
    likes: unknown

}

