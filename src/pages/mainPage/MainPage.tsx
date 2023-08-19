import React from 'react';
import style from './mainPage.module.css'
import {getLoginFromStorage} from "../../utils/loginForLocalStorage";
import {Navigate} from "react-router-dom";
import {PATH} from "../../utils/path";

export const MainPage = () => {
    const login = getLoginFromStorage()

    if (!login) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <div>
            MainPage
        </div>
    );
};

