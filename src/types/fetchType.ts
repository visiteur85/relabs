export type FetchUsersType = {
    total: number
    per_page: number
    page: number
    limit: number
    offset: number
    items: Array<UserItem>

}

export type UserItem = {
    id: number
    name: string
    role: string
    ctime: string

}