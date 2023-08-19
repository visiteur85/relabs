import React from 'react';
import {FetchUsersType} from "../../../types/fetchType";
import {UsersTable} from "./usersTable/UsersTable";
import {UsersPagination} from "./usersPagination/UsersPagination";
import {PaginationData} from "../../../shared/constants/pagination";
import style from './userList.module.css'


type UsersListPropsType = {
    users: FetchUsersType | null
    callback: (id: number) => void
    total?: number
    setNewUsers: (newUsersData: FetchUsersType) => void
}


export const UsersList = ({users, callback, total, setNewUsers}: UsersListPropsType) => {

    const onRemoveUser = (id: number) => {
        callback(id)
    }

    const allPages = total && Math.ceil(total / PaginationData.limit)

    return (
        <>
            <div className={style.table}>
                <UsersTable users={users} callback={onRemoveUser}/>
            </div>
            <div className={style.pagination}>
                <UsersPagination total={allPages} setNewUsers={setNewUsers}/>
            </div>

        </>
    );
};

