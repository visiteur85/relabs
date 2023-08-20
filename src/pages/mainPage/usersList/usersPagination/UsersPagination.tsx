import React, {ChangeEvent} from 'react';
import {Pagination} from "@mui/material";
import {PaginationData} from "../../../../shared/constants/pagination";
import {usersApi} from "../../../../api/usersApi";
import {FetchUsersType} from "../../../../types/fetchType";
import {toast} from "react-toastify";


type UsersPaginationPropsType = {
    total?: number
    setNewUsers: (newUsersData: FetchUsersType) => void
    setFetch: (value: boolean) => void
}
export const UsersPagination = ({total, setNewUsers, setFetch}: UsersPaginationPropsType) => {
    const onChangePage = async (e: ChangeEvent<unknown>, page: number) => {
        const offset = (page - 1) * PaginationData.limit
        try {
            setFetch(true)
            const newUsersData = await usersApi.getUsers(offset)
            setNewUsers(newUsersData.data)
            setFetch(false)

        } catch (error) {
            toast.error("Ошибка сервера")
            setFetch(false)
        }
    }

    return (
        <Pagination count={total} color={'primary'} onChange={onChangePage}/>
    );
};

