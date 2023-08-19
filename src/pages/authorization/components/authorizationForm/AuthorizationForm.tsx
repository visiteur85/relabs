import React, {useState} from 'react';
import style from './authorizationForm.module.css'
import {SubmitHandler, useForm,} from "react-hook-form";
import {LoginFormType} from "../../../../types/AuthorizationFormType";
import {Button, LinearProgress, Stack} from "@mui/material";
import {LoginInput} from "./loginInput/LoginInput";
import {PasswordInput} from "./passwordInput/PasswordInput";
import {saveLoginToStorage} from "../../../../utils/loginForLocalStorage";

export const AuthorizationForm = () => {
    const [isFetch, setIsFetch] = useState(false)
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<LoginFormType>({mode: 'onSubmit'});
    const onSubmit: SubmitHandler<LoginFormType> = (data) => {
      setIsFetch(true);
      saveLoginToStorage(data)
      setTimeout(()=>{setIsFetch(false)}, 2000)
    };

    return (
        <div className={style.authorizationForm}>
            <h2>Авторизация</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                    <LoginInput isFetch={isFetch}  register={register} errors={errors}/>
                    <PasswordInput isFetch={isFetch} register={register} errors={errors}/>
                    <Button disabled={isFetch} type='submit' variant={'contained'}>
                        Войти
                    </Button>
                    {isFetch &&  <LinearProgress color="secondary" />}
                </Stack>

            </form>
        </div>
    );
};


