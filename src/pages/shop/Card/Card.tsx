import React from 'react';
import {Button, CardContent, Typography} from "@mui/material";
import Card from '@mui/material/Card';
import {CardPicture} from "./CardPicture";
import style from './cart.module.css'
import {Price} from "./Price";
import Box from "@mui/material/Box";
import {Raiting} from "./Raiting";
import {Specifications} from "./Specifications";
import {Installment} from "./Installment";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const CardComponent = () => {
    return (
        <Card sx={{maxWidth: 400}}>
            <CardPicture/>
            <CardContent>
                <Box className={style.description}>
                    <Box>
                        <Price/>
                        <Typography variant="h6" style={{color: "red"}}>99 999 ₽</Typography>
                    </Box>
                    <Specifications/>
                    <Raiting/>
                </Box>
                <Box sx={{marginBottom: '5px'}}>
                    <Installment/>
                </Box>
                <Box className={style.basket}>
                    <Button sx={{backgroundColor: 'darkcyan', color: 'white', borderRadius: '10px', marginRight: '5px'}}
                            size="small">В корзину</Button>
                    <FavoriteBorderIcon/>
                </Box>
            </CardContent>
        </Card>
    );
};

