type FindUserEntity = {
    id: string
    firstName: string
    lastName: string
    username: string
    email: string
    status?: string
    pfp?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
}

export class FindUserResponse {
    code: number
    message: string
    data: FindUserEntity | FindUserEntity[]
}