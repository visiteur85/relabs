import React from 'react';
import style from './authorization.module.css'
import {AuthorizationForm} from "./components/authorizationForm/AuthorizationForm";

export const Authorization = () => {
    return (
        <section className={style.authorization}>
            <AuthorizationForm/>
        </section>
    );
};

