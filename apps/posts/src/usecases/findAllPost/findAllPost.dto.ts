type FindAllPostEntity = {
    id: string
    userId: string
    content: string
}

export class FindAllPostResponse {
    code: number
    message: string
    data: FindAllPostEntity[]
    user: any
}