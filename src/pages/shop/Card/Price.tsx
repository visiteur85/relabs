import React from 'react';
import style from './cart.module.css'
import {Title} from "@mui/icons-material";
import {Typography} from "@mui/material";

export const Price = () => {
    return (
        <div className={style.price}>
            <Typography variant="h5" >86 956 ₽</Typography>
            <Typography variant="h6" style={{ textDecoration: 'line-through' }}>99 999 ₽</Typography>

        </div>
    );
};

