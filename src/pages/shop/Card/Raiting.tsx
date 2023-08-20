import React from 'react';
import Box from "@mui/material/Box";
import style from './cart.module.css'
import Rating from '@mui/material/Rating';
import {Typography} from "@mui/material";

export const Raiting = () => {
    return (
        <Box className={style.rating}>
            <Rating defaultValue={2.5}/>
            <Typography sx={{marginLeft: '8px'}}>
                101
            </Typography>
        </Box>
    );
};

