import React from 'react';
import style from './authorization.module.css'
import {AuthorizationForm} from "./components/authorizationForm/AuthorizationForm";


type AuthorizationPropsType = {
    setAuth:  React.Dispatch<React.SetStateAction<boolean>>
}
export const Authorization = ({setAuth}:AuthorizationPropsType) => {
    return (
        <section className={style.authorization}>
            <AuthorizationForm setAuth={setAuth}/>
        </section>
    );
};

