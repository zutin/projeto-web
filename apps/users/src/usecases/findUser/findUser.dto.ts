type FindUserEntity = {
    id: string
    firstName: string
    lastName: string
    username: string
    email: string
    dob?: Date | string
    status?: string
    pfp?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
    allowPublicName?: boolean
    allowPublicDob?: boolean
}

export class FindUserResponse {
    code: number
    message: string
    data: FindUserEntity | FindUserEntity[]
}