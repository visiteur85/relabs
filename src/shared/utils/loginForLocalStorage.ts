import {getFromLocalStorage, removeFromStorage, setToLocalStorage} from "./local-storage";
import {LoginFormType} from "../../types/AuthorizationFormType";


const KEY = 'login';

export const saveLoginToStorage = (data: LoginFormType) => {
    setToLocalStorage(KEY, data);
};

export const getLoginFromStorage = () => getFromLocalStorage(KEY);

export const removeLoginFromStorage = () => removeFromStorage(KEY);