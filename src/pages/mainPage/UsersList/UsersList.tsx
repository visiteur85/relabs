import React from 'react';
import {Pagination,} from "@mui/material";
import {FetchUsersType} from "../../../types/fetchType";
import {UsersTable} from "./UsersTable/UsersTable";
import {UsersPagination} from "./UsersPagination/UsersPagination";
import {PaginationData} from "../../../shared/constants/pagination";


type UsersListPropsType = {
    users: FetchUsersType | null
    callback: (id: number) => void
    total?: number
    setNewUsers:(newUsersData:FetchUsersType)=>void
}


export const UsersList = ({users, callback, total, setNewUsers}: UsersListPropsType) => {

    const onRemoveUser = (id: number) => {
        callback(id)
    }

    const allPages = total && Math.ceil(total/PaginationData.limit)

    return (
        <>
            <UsersTable users={users} callback={onRemoveUser}/>
            <UsersPagination total={allPages} setNewUsers={setNewUsers}/>

        </>
    );
};

