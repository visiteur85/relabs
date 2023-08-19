import {FieldErrors, FieldPath, RegisterOptions, UseFormRegisterReturn} from "react-hook-form";
import {LoginFormType} from "../../../../../types/authorizationFormType";
import React, {useState} from "react";
import {IconButton, InputAdornment, TextField} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

type PasswordInputPropsType = {
    register: (name: FieldPath<LoginFormType>, options?: RegisterOptions<LoginFormType>) => UseFormRegisterReturn
    errors: FieldErrors<LoginFormType> | undefined
    isFetch: boolean
}
export const PasswordInput = ({register, errors, isFetch}: PasswordInputPropsType) => {
    const [showPassword, setShowPassword] = useState(false);

    const validatePassword = (value: string) => {
        if (!/(?=.*[A-Z])/.test(value)) {
            return 'Пароль должен содержать хотя бы одну большую букву';
        }
        if (/\s/.test(value)) {
            return 'Пароль не может содержать пробелы';
        }
        return true;
    };
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <TextField
            placeholder={'Введите пароль'}
            fullWidth
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            label={'Пароль'}
            color="secondary"
            size={'small'}
            disabled={isFetch}
            {...register('password', {
                required: 'Введите пароль',
                minLength: {
                    value: 8,
                    message: 'Пароль не может быть меньше 8 символов',
                },
                validate: validatePassword,
            })}
            error={!!errors?.password}
            helperText={errors?.password?.message}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword}>
                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    )
}