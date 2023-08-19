import React, {useEffect, useState} from 'react';
import style from './mainPage.module.css'
import {getLoginFromStorage} from "../../shared/utils/loginForLocalStorage";
import {Navigate} from "react-router-dom";
import {PATH} from "../../shared/constants/path";
import {UsersList} from "./UsersList/UsersList";
import {usersApi} from "../../api/usersApi";
import {LinearProgress} from "@mui/material";
import {FetchUsersType} from "../../types/fetchType";


export const MainPage = () => {
    const login = getLoginFromStorage();
    const [isFetch, setIsFetch] = useState(false);
    const [users, setUsers] = useState<FetchUsersType | null>(null)

    const removeUser = (id: number) => {
        setUsers(prevUsers => {
            if (prevUsers) {
                const updatedUsers = prevUsers.items.filter(user => user.id !== id);
                return {...prevUsers, items: updatedUsers};
            }
            return null;
        });
    }

    const getUsersPerPage = (newUsersData: FetchUsersType) => {
        setUsers(newUsersData)
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsFetch(true)
                const res = await usersApi.getUsers(0);
                setUsers(res.data)
                setIsFetch(false)
            } catch (error) {
                console.error('Error fetching users:', error);
                throw new Error(

                )
            }
        };
        fetchData();
    }, []);

    if (!login) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <div className={style.main}>
            {isFetch && <LinearProgress color="secondary"/>}
            {!isFetch && (
                <div>
                    <UsersList total={users?.total} setNewUsers={getUsersPerPage} callback={removeUser} users={users}/>
                </div>
            )}
        </div>
    );
};

