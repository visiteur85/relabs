import React from 'react';
import {Badge, CardMedia} from "@mui/material";
import phone from "../../../assets/images/iphone.jpeg";
import style from './cart.module.css'

export const CardPicture = () => {
    return (
        <div className={style.img}>
            <CardMedia
                component="img"
                alt="phone"
                image={phone}
            />
            <div className={style.img_sow}>Смотреть</div>
            <button className={style.filters}></button>
            <Badge className={style.sale} badgeContent={'-24%'} color="success">
            </Badge>
        </div>
    );
};

