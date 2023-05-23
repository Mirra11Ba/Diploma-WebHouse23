import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import classes from "./Trip.module.css";
import {SmallButton} from "../styled/buttons/SmallButton";
import ImgRieltor from "../../media/images/rieltor-larisa-bagrova.webp";
import Box from "@mui/material/Box";
import {styled, TextField} from "@mui/material";
import {CardButton} from "../styled/buttons/CardButton";




export default function Trip() {
    const StyledTextField = styled(TextField)(({theme}) => ({
        width: '80%'
    }))

    return (
        <Grid2 container spacing={2} sx={{
            gap: {
                // xs: "20px",
                // sm: "35px",
                // lg: "19px",
            },
        }}>
            <Grid2 item xs={12} md={6}>
                <Box>
                    <img style={{width: '100%',aspectRatio: '1 / 1', borderRadius: '4px', objectFit: 'cover'}} src={ImgRieltor}/>
                </Box>
            </Grid2>
            <Grid2 item xs={12} md={6}>
                <Box  sx={{
                    border: "3px solid #18A0FB",
                    borderRadius: "4px",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 4,
                    maxWidth: '100%',
                    height: '100%',
                    padding: 2
                }}>
                    <h4 style={{padding: "16px, 16px, 16px, 16px", alignContent: "center"}}><span style={{color: 'var( --neptune-blue)'}}>Оставьте номер</span> и мы вам перезвоним!</h4>
                    <StyledTextField id="phone" label="Телефон*" variant="outlined" />
                    <StyledTextField id="email" label="Почта*" variant="outlined" />
                    <StyledTextField id="name" label="Имя" variant="outlined" />
                    <CardButton variant={'contained'} sx={{alignItems: "center"}}>Жду звонка!</CardButton>
                    <p className={`${classes.text} mon-body-14-reg`} style={{width: '80%'}}>Отправляя свои данные вы соглашаетесь с политикой конфиденциальности</p>
                   {/* <Box sx={{alignContent: "center", paddingLeft: "104px", paddingRight: "104px", paddingBottom: "93px"}}>

                    </Box>*/}
                </Box>
            </Grid2>


        </Grid2>
    );
};