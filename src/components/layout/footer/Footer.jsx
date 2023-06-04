import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import ImgWhiteLogo from "../../../media/images/logo/house-23-logo-white.png";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {CardButton} from "../../styled/buttons/CardButton";
import IconButton from "@mui/material/IconButton";
import IcoTelegram from "../../../media/svg/social/telegram.svg";
import IcoVK from "../../../media/svg/social/vk.svg";
import IcoWhatsApp from "../../../media/svg/social/whatsapp.svg";
import IcoYouTube from "../../../media/svg/social/youtube.svg";
import IcoOk from "../../../media/svg/social/ok.svg";
import IcoDzen from "../../../media/svg/social/dzen.svg"

export default function Footer() {

    const pages = [
        {title: "Главная", url: '/'},
        {title: "Дома", url: '/catalog'},
        {title: "Способы оплаты", url: '/payments'},
        {title: "Услуги", url: '/services'},
        {title: "О нас", url: '/about'},
        {title: "Контакты", url: '/contacts'},
    ];

    const addPages = [
        {title: "Новости", url: '/'},
        {title: "Политика конфиденциальности", url: '/catalog'},
        {title: "FAQ", url: '/payments'},
    ];

    const socialLinks = [
        {title: "Telegram", url: "https://t.me/moydom23", icon: IcoTelegram},
        {title: "VK", url: "https://vk.com/krasnodarmoy", icon: IcoVK},
        {title: "WhatSap", url: "https://wa.me/+79182505588", icon: IcoWhatsApp},
        {title: "YouTube", url: "https://www.youtube.com/channel/UCereBbnFSA5FvTwsalZzB0w", icon: IcoYouTube},
        {title: "OK", url: "https://ok.ru/larisa.bagrova", icon:IcoOk},
        {title: "Zen", url: "https://zen.yandex.ru/tvoydom", icon: IcoDzen},
    ];

    return (
        // Главный big grid - columns
        <Box sx={{
            background: "#1B1C37",
            marginTop: "60px",
        }}>

            <Grid2 container sx={{
                gap: {
                    sm: "10px",
                    md: "15px",
                },
                maxWidth: '1200px',
                margin: 'auto',
                color: 'white',
                "& h5": {
                    textAlign: 'start',
                    pt: 2,
                    pb: 1
                },
                "& a": {
                    textDecoration: 'none',
                    color: 'white',
                },
                px: {xs: 2, sm: 0}
            }}>

                {/* Второстепенный grid - individual rows (card)*/}
                <Grid2 item xs={12} md={3} sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <img src={ImgWhiteLogo}/>
                </Grid2>

                <Grid2 item xs={12} md={2}>
                    <Box className={"mon-menu-16-med"}
                        sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: {xs: 'center', md: 'start'},
                        gap: 1
                    }}>
                        <h5>Навигация</h5>

                        {pages.map((item) => (
                            <Link to={item.url}>{item.title}</Link>
                        ))}
                    </Box>
                </Grid2>

                <Grid2 item xs={12} md={2}>
                    <Box className={"mon-menu-16-med"}
                        sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: {xs: 'center', md: 'start'},
                        gap: 1
                    }}>
                        <h5>Дополнительно</h5>
                        {addPages.map((item) => (
                            <Link to={item.url}>{item.title}</Link>
                        ))}
                    </Box>

                </Grid2>

                <Grid2 item xs={12} md={2} >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: {xs: 'center', md: 'start'},
                        gap: 1
                    }}>
                        <h5>Контакты</h5>
                        <p className={"mon-menu-16-med"}>
                            <a style={{textDecoration: "none",}}
                               href={"tel: +79182505588"}>+7(918)250-55-88
                            </a>
                        </p>


                    </Box>

                </Grid2>

                <Grid2 item xs={12} md sx={{
                    display: 'flex',
                    flexDirection: {xs: 'row', sm: 'column'},
                    alignItems: {xs: 'center', md: 'end'},
                    justifyContent: 'center',
                    gap: 2,
                    py: 2
                }}>
                    <CardButton variant={'contained'} sx={{alignItems: "center"}} sx={{
                        minWidth: '130px'}}>
                        Регистрация
                    </CardButton>
                    <CardButton variant={'contained'} sx={{
                        bgcolor: 'white',
                        color: '#000',
                        "&:hover": {
                            bgcolor: 'white'
                        },
                        minWidth: '130px'
                    }}>
                        <p style={{color: 'var(--neptune-blue)'}}>Войти</p>
                    </CardButton>
                </Grid2>

                <Grid2 item xs={12}>
                    <Divider sx={{width: '100%', bgcolor: 'white'}}/>
                </Grid2>

                <Grid2 item xs={12} md={4}>
                    <p className={"mon-body-14-reg"}>
                        © Copyright 2023. House23
                    </p>
                </Grid2>

                <Grid2 item xs={12} md sx={{
                    py: {xs: 2, sm: 0},
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        {socialLinks.map((link) => (
                            <a key={link.title} href={link.url}>
                                <img src={link.icon} alt={link.title} />
                            </a>
                        ))}
                    </div>
                </Grid2>
                <Grid2 item xs={12} md={4} sx={{textAlign: 'end'}}>
                    <p className={"mon-body-14-reg"}>Created by <a href={"https://github.com/Mirra11Ba"}>Mirra11Ba</a></p>
                </Grid2>
            </Grid2>
        </Box>
    );
};
