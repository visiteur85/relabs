import {FieldErrors, FieldPath, RegisterOptions, UseFormRegisterReturn} from "react-hook-form";
import {LoginFormType} from "../../../../../types/authorizationFormType";
import {TextField} from "@mui/material";
import React from "react";

type LoginInputPropsType = {
    register: (name: FieldPath<LoginFormType>, options?: RegisterOptions<LoginFormType>) => UseFormRegisterReturn
    errors: FieldErrors<LoginFormType> | undefined;
    isFetch: boolean
}

export const LoginInput = ({register, errors, isFetch}: LoginInputPropsType) => {
    return (<TextField placeholder={'Введите email'} fullWidth
                       variant="outlined"
                       label={'Электронная почта'}
                       color="secondary"
                       size={'small'}
                       disabled={isFetch}
                       {...register('email', {
                           required: 'Введите email',
                           pattern: {
                               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                               message: 'Введите корректный email',
                           },
                       })}
                       error={!!errors?.email}
                       helperText={errors?.email?.message}
    />)

}