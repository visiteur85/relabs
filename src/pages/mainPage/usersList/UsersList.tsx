import React, {useEffect, useState} from 'react';
import {FetchUsersType} from "../../../types/fetchType";
import {UsersTable} from "./usersTable/UsersTable";
import {UsersPagination} from "./usersPagination/UsersPagination";
import {PaginationData} from "../../../shared/constants/pagination";
import style from './userList.module.css'
import {Heading} from "../../../components/heading/Heading";
import {usersApi} from "../../../api/usersApi";
import {toast} from "react-toastify";
import {LinearProgress} from "@mui/material";


export const UsersList = () => {
    const [isFetch, setIsFetch] = useState(false);
    const [users, setUsers] = useState<FetchUsersType | null>(null);

    const onRemoveUser = (id: number) => {
        setUsers(prevUsers => {
            if (prevUsers) {
                const updatedUsers = prevUsers.items.filter(user => user.id !== id);
                return {...prevUsers, items: updatedUsers};
            }
            return null;
        });
    };

    const setNewUsers = (newUsersData: FetchUsersType) => {
        setUsers(newUsersData);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsFetch(true)
                const res = await usersApi.getUsers();
                setUsers(res.data)
                setIsFetch(false)
            } catch (error) {
                toast.error("Ошибка сервера")
                setIsFetch(false)
            }
        };
        fetchData();
    }, []);

    const allPages = users?.total && Math.ceil(users.total / PaginationData.limit)

    return (
        <>
            {isFetch && <LinearProgress color="secondary"/>}
            <Heading text={'Список пользователей'}/>
            <div className={style.table}>
                <UsersTable users={users} callback={onRemoveUser}/>
            </div>
            <div className={style.pagination}>
                <UsersPagination setFetch={setIsFetch} total={allPages} setNewUsers={setNewUsers}/>
            </div>

        </>
    );
};

