type FindPostEntity = {
    id: string
    userId: string
    content: string
}

export class FindPostResponse {
    code: number
    message: string
    data: FindPostEntity | FindPostEntity[]
    user?: any
}