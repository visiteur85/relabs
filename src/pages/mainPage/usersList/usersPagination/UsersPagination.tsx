import React, {ChangeEvent} from 'react';
import {Pagination} from "@mui/material";
import {PaginationData} from "../../../../shared/constants/pagination";
import {usersApi} from "../../../../api/usersApi";
import {FetchUsersType} from "../../../../types/fetchType";


type UsersPaginationPropsType = {
    total?: number
    setNewUsers: (newUsersData: FetchUsersType) => void
}
export const UsersPagination = ({total, setNewUsers}: UsersPaginationPropsType) => {
    const onChangePage = async (e: ChangeEvent<unknown>, page: number) => {
        const offset = (page - 1) * PaginationData.limit
        try {
            const newUsersData = await usersApi.getUsers(offset)
            setNewUsers(newUsersData.data)

        } catch (error) {
            console.error('Error fetching users:', error);
            throw new Error(
            )
        }
    }

    return (
        <Pagination count={total} color={'primary'} onChange={onChangePage}/>
    );
};

