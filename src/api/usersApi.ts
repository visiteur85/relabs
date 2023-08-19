import {instance} from "./instanse/instanse";
import {FetchUsersType} from "../types/fetchType";


export const usersApi = {
    getUsers: (offset?: number) => {
        const url = offset !== undefined ? `/list?offset=${offset}` : '/list';
        return instance.get<FetchUsersType>(url);
    }
}