import React, {useState} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import classes from "./Trip.module.css";
import {SmallButton} from "../styled/buttons/SmallButton";
import ImgRieltor from "../../media/images/rieltor-larisa-bagrova.webp";
import Box from "@mui/material/Box";
import {styled, TextField} from "@mui/material";
import {CardButton} from "../styled/buttons/CardButton";

import backCall from "../../store/backCall";
import BackCallsService from "../../api/services/BackCallsService";
import user from "../../store/user";
import {StyledTextField} from "../styled/textFields/StyledTextField";



export default function Trip() {


    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleCreateBackCall = async () => {
        if (phone && email && name) {
            console.log(await BackCallsService.addBackCall(phone, name, email))
        }
    }

    return (
        <Grid2 container spacing={2} sx={{
            gap: {
                // xs: "20px",
                // sm: "35px",
                // lg: "19px",
            },
            mb: 2
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
                    <StyledTextField
                        id="phone"
                        label="Телефон*"
                        variant="outlined"
                        value={phone}
                        onChange={handlePhone}
                    />
                    <StyledTextField
                        id="email"
                        label="Почта*"
                        variant="outlined"
                        value={email}
                        onChange={handleEmail}
                    />
                    <StyledTextField
                        id="name"
                        label="Имя"
                        variant="outlined"
                        value={name}
                        onChange={handleName}
                    />
                    <CardButton
                        variant={'contained'}
                        sx={{alignItems: "center"}}
                        onClick={handleCreateBackCall}
                    >
                        Жду звонка!
                    </CardButton>
                    <p className={`${classes.text} mon-body-14-reg`} style={{width: '80%'}}>Отправляя свои данные вы соглашаетесь с политикой конфиденциальности</p>
                   {/* <Box sx={{alignContent: "center", paddingLeft: "104px", paddingRight: "104px", paddingBottom: "93px"}}>
                    </Box>*/}
                </Box>
            </Grid2>
        </Grid2>
    );
};