import React from 'react';
import {CardComponent} from "./Card/Card";
import style from './shop.module.css'

export const Shop = () => {
    const cards = Array.from({length: 8}, (item, index) => (
        <CardComponent key={index}/>
    ));
    return (
        <div className={style.shop}>
            {cards}
        </div>
    );
};

