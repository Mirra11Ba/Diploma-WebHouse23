import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import classes from "../../components/trip/Trip.modules.css";
import {SmallButton} from "../styled/buttons/SmallButton";
import {Book} from "@mui/icons-material";
import ImgRieltor from "../../media/images/rieltor-larisa-bagrova.webp";
import CallBackForm from "../forms/CallBackForm";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";

export default function Trip() {
    return (
        <Grid2 container sx={{
            gap: {
                // xs: "20px",
                // sm: "35px",
                // lg: "19px",
            },
            alignItems: "flex-start",
            justifyContent: "center",
        }}>
            <Grid2 container className={classes.card} sx={{
                gap: {
                    sm: "10px",
                }
            }}>

                <Grid2 className={classes.card}>
                    <img className={classes.img} src={ImgRieltor}/>
                </Grid2>
                <Grid2 className={classes.card}>
                    <Box className={classes.card} sx={{border: "3px solid #18A0FB", borderRadius: "15px"}}>
                        <h4 sx={{padding: "30px 143px", alignContent: "center"}}>Оставьте номер и мы вам перезвоним!</h4>
                        <Box sx={{alignContent: "center", paddingLeft: "104px", paddingRight: "104px", paddingBottom: "93px"}}>
                            <TextField id="phone" label="Телефон*" variant="outlined" />
                            <TextField id="email" label="Почта*" variant="outlined" />
                            <TextField id="name" label="Имя" variant="outlined" />
                            <SmallButton sx={{alignItems: "center"}}>Жду звонка!</SmallButton>
                            <p className={`${classes.text} mon-body-14-reg`}>Отправляя свои данные вы соглашаетесь с политикой конфиденциальности</p>
                        </Box>
                    </Box>
                </Grid2>

            </Grid2>

        </Grid2>
    );
};