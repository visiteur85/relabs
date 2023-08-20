import {getFromLocalStorage, removeFromStorage, setToLocalStorage} from "./localStorage";
import {LoginFormType} from "../../types/authorizationFormType";


const KEY = 'login';

export const saveLoginToStorage = (data: LoginFormType) => {
    setToLocalStorage(KEY, data);
};

export const getLoginFromStorage = () => getFromLocalStorage(KEY);

export const removeLoginFromStorage = () => removeFromStorage(KEY);