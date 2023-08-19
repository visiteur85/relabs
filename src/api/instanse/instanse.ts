import axios from 'axios';

export const API_URL = "https://test.relabs.ru/api/";

export const instance = axios.create({
    baseURL: API_URL,

});