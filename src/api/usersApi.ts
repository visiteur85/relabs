import {instance} from "./instanse/instanse";
import {FetchUsersType} from "../types/fetchType";


export const usersApi = {
    getUsers: (offset:number) => {
        return instance.get<FetchUsersType>(`/users/list?offset=${offset}`)
    }
}