import axios from 'axios';

export const API_URL = "https://test.relabs.ru/api/users";

export const instance = axios.create({
    baseURL: API_URL,

});