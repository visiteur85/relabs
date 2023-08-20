import React, {useState} from 'react';
import style from './authorizationForm.module.css'
import {SubmitHandler, useForm,} from "react-hook-form";
import {LoginFormType} from "../../../../types/authorizationFormType";
import {Button, LinearProgress, Stack} from "@mui/material";
import {LoginInput} from "./loginInput/LoginInput";
import {PasswordInput} from "./passwordInput/PasswordInput";
import {getLoginFromStorage, saveLoginToStorage} from "../../../../shared/utils/loginForLocalStorage";
import {Navigate, useNavigate} from "react-router-dom";
import {PATH} from "../../../../shared/constants/path";


type AuthorizationFormPropsType = {
    setAuth:  React.Dispatch<React.SetStateAction<boolean>>
}
export const AuthorizationForm = ({setAuth}:AuthorizationFormPropsType) => {
    const [isFetch, setIsFetch] = useState(false);
    const login = getLoginFromStorage()

    const navigate = useNavigate()

    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<LoginFormType>({mode: 'onSubmit'});

    const onSubmit: SubmitHandler<LoginFormType> = (data) => {
        setIsFetch(true);
        saveLoginToStorage(data)
        setTimeout(() => {
            setIsFetch(false)
            setAuth(true)
            navigate(PATH.MAIN_PAGE)

        }, 2000)
    };

    if (login) {
        return <Navigate to={PATH.MAIN_PAGE}/>
    }

    return (
        <div className={style.authorizationForm}>
            <h2>Авторизация</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                    <LoginInput isFetch={isFetch} register={register} errors={errors}/>
                    <PasswordInput isFetch={isFetch} register={register} errors={errors}/>
                    <Button disabled={isFetch} type='submit' variant={'contained'}>
                        Войти
                    </Button>
                    {isFetch && <LinearProgress color="secondary"/>}
                </Stack>

            </form>
        </div>
    );
};


