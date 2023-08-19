import React, {useEffect, useState} from 'react';
import style from './mainPage.module.css'
import {getLoginFromStorage} from "../../shared/utils/loginForLocalStorage";
import {Navigate} from "react-router-dom";
import {PATH} from "../../shared/constants/path";
import {UsersList} from "./usersList/UsersList";
import {usersApi} from "../../api/usersApi";
import {LinearProgress} from "@mui/material";
import {FetchUsersType} from "../../types/fetchType";
import {EventList} from "./eventList/EventList";
import {toast} from "react-toastify";


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

    if (!login) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <section>
            {isFetch && <LinearProgress color="secondary"/>}
            {!isFetch && (
                <div className={style.main}>
                    <div>
                        <UsersList total={users?.total} setNewUsers={getUsersPerPage} callback={removeUser}
                                   users={users}/>
                    </div>
                    <EventList/>
                </div>
            )}
        </section>
    );
};

