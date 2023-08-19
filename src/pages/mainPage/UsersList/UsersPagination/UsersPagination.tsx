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
        const newUsersData = await usersApi.getUsers(offset)
        setNewUsers(newUsersData.data)
    }

    return (
        <Pagination count={total} color={'primary'} onChange={onChangePage}/>
    );
};

