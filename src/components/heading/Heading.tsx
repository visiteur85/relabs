import React from 'react';
import style from './heading.module.css'


type HeadingPropsType = {
    text: string
}
export const Heading = ({text}: HeadingPropsType) => {
    return (
        <h2 className={style.heading}>{text}</h2>
    );
};

