import React from 'react';
import style from './cart.module.css'
import {Typography} from "@mui/material";

const specifications = [
    'Apple',
    'Смартфон iPhone 11  128Gb',
    '6.4"',
    '2532x1170',
    'IPS',
    '64 Гб',
];
export const Specifications = () => {
    const lastItemIndex = specifications.length - 1;
    return (
        <div>
            {specifications.map((item, index) => (
                <Typography color={'dimmed'} component={'span'} key={index}>
                    {item}
                    {index !== lastItemIndex && <span className={style.separator}>/</span>}
                </Typography>
            ))}
        </div>
    );
};

