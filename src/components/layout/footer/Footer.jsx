import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import ImgWhiteLogo from "../../../media/images/house-23-logo-white.png";
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
        {title: "Telegram", url: "https://t.me/moydom23"},
        {title: "VK", url: "https://vk.com/krasnodarmoy"},
        {title: "WhatSap", url: "https://wa.me/+79182505588"},
        {title: "YouTube", url: "https://www.youtube.com/channel/UCereBbnFSA5FvTwsalZzB0w"},
        {title: "OK", url: "https://ok.ru/larisa.bagrova"},
        {title: "Zen", url: "https://zen.yandex.ru/tvoydom"},
    ];

    return (
        // Гланый big grid - columns
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
                    {/*<IconButton href={"https://t.me/moydom23"}>*/}
                    {/*    <svg src={"IcoTelegram"}/>*/}
                    {/*</IconButton>*/}

                    <svg width="290" height="40" viewBox="0 0 290 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="200" width="40" height="40" rx="20" fill="#18A0FB"/>
                        <path d="M226.238 22.7928C226.762 22.2681 226.837 21.5185 226.388 20.7689C226.013 20.1692 225.338 19.8694 224.589 20.0193C224.289 20.0942 223.989 20.2442 223.689 20.469C221.365 22.0432 218.217 21.9683 215.893 20.3941C215.743 20.3191 215.593 20.2442 215.443 20.1692C214.619 19.7944 213.794 19.9443 213.344 20.6939C212.82 21.4435 212.895 22.2681 213.569 22.9428C213.719 23.0927 213.869 23.1676 213.944 23.3176L214.019 23.3925C215.068 24.2171 216.343 24.7418 217.992 24.9667L217.017 25.9412C216.193 26.7658 215.293 27.6653 214.469 28.4899C214.244 28.7148 213.944 29.0896 213.944 29.6143C213.944 30.2889 214.319 30.9636 214.993 31.2634C215.218 31.4133 215.443 31.4133 215.668 31.4133C216.043 31.4133 216.493 31.2634 216.793 30.8886C217.917 29.7642 218.817 28.8647 219.716 27.9651C219.791 27.8902 219.791 27.8902 219.791 27.8902C219.791 27.8902 219.866 27.8902 219.866 27.9651C220.466 28.6398 221.14 29.2395 221.74 29.9141C222.04 30.214 222.34 30.5138 222.64 30.8137C223.014 31.1885 223.314 31.3384 223.764 31.3384C224.439 31.4134 225.188 30.9636 225.488 30.2889C225.788 29.6892 225.638 28.9396 225.113 28.4899C224.364 27.7403 223.614 26.9157 222.789 26.1661L221.515 24.8917C222.19 24.8168 222.939 24.6669 223.614 24.367C224.738 23.9922 225.563 23.4675 226.238 22.7928Z" fill="white"/>
                        <path d="M219.791 20.6939C223.014 20.6939 225.638 18.1452 225.638 14.9219C225.638 13.3477 225.038 11.8485 223.914 10.7241C222.789 9.59969 221.365 9 219.866 9C216.643 9 214.094 11.6236 214.019 14.772C214.019 16.3462 214.619 17.7704 215.743 18.8948C216.793 20.0942 218.217 20.6939 219.791 20.6939ZM218.142 13.1978C218.592 12.7481 219.191 12.5232 219.791 12.5232C221.14 12.5232 222.115 13.5726 222.115 14.847C222.115 16.1963 221.065 17.1707 219.791 17.1707C218.442 17.1707 217.467 16.1213 217.467 14.847C217.467 14.2473 217.692 13.6476 218.142 13.1978Z" fill="white"/>
                        <path d="M226.238 22.7928C226.762 22.2681 226.837 21.5185 226.388 20.7689C226.013 20.1692 225.338 19.8694 224.589 20.0193C224.289 20.0942 223.989 20.2442 223.689 20.469C221.365 22.0432 218.217 21.9683 215.893 20.3941C215.743 20.3191 215.593 20.2442 215.443 20.1692C214.619 19.7944 213.794 19.9443 213.344 20.6939C212.82 21.4435 212.895 22.2681 213.569 22.9428C213.719 23.0927 213.869 23.1676 213.944 23.3176L214.019 23.3925C215.068 24.2171 216.343 24.7418 217.992 24.9667L217.017 25.9412C216.193 26.7658 215.293 27.6653 214.469 28.4899C214.244 28.7148 213.944 29.0896 213.944 29.6143C213.944 30.2889 214.319 30.9636 214.993 31.2634C215.218 31.4133 215.443 31.4133 215.668 31.4133C216.043 31.4133 216.493 31.2634 216.793 30.8886C217.917 29.7642 218.817 28.8647 219.716 27.9651C219.791 27.8902 219.791 27.8902 219.791 27.8902C219.791 27.8902 219.866 27.8902 219.866 27.9651C220.466 28.6398 221.14 29.2395 221.74 29.9141C222.04 30.214 222.34 30.5138 222.64 30.8137C223.014 31.1885 223.314 31.3384 223.764 31.3384C224.439 31.4134 225.188 30.9636 225.488 30.2889C225.788 29.6892 225.638 28.9396 225.113 28.4899C224.364 27.7403 223.614 26.9157 222.789 26.1661L221.515 24.8917C222.19 24.8168 222.939 24.6669 223.614 24.367C224.738 23.9922 225.563 23.4675 226.238 22.7928Z" fill="white"/>
                        <rect x="50" y="0.00012207" width="40" height="40" rx="20" fill="#18A0FB"/>
                        <path d="M70.9825 27.0001C63.466 27.0001 59.1786 21.7449 59 13.0001H62.7651C62.8888 19.4185 65.6646 22.1373 67.8632 22.6978V13.0001H71.4085V18.5357C73.5796 18.2974 75.8607 15.7749 76.6302 13.0001H80.1755C79.8855 14.4392 79.3075 15.8018 78.4776 17.0026C77.6477 18.2035 76.5837 19.2168 75.3523 19.9791C76.7269 20.6757 77.941 21.6616 78.9145 22.8719C79.888 24.0821 80.5988 25.4891 81 27.0001H77.0974C76.7373 25.6877 76.0054 24.5129 74.9934 23.6229C73.9814 22.733 72.7343 22.1674 71.4085 21.9971V27.0001H70.9825Z" fill="white"/>
                        <rect x="100" width="40" height="40" rx="20" fill="#18A0FB"/>
                        <path d="M127.927 12.0625C125.951 10.0937 123.317 9 120.537 9C114.756 9 110.073 13.6667 110.073 19.4271C110.073 21.25 110.585 23.0729 111.463 24.6042L110 30L115.561 28.5417C117.098 29.3438 118.78 29.7812 120.537 29.7812C126.317 29.7812 131 25.1146 131 19.3542C130.927 16.6563 129.902 14.0312 127.927 12.0625ZM125.585 23.1458C125.366 23.7292 124.341 24.3125 123.829 24.3854C123.39 24.4583 122.805 24.4583 122.22 24.3125C121.854 24.1667 121.341 24.0208 120.756 23.7292C118.122 22.6354 116.439 20.0104 116.293 19.7917C116.146 19.6458 115.195 18.4062 115.195 17.0937C115.195 15.7812 115.854 15.1979 116.073 14.9062C116.293 14.6146 116.585 14.6146 116.805 14.6146C116.951 14.6146 117.171 14.6146 117.317 14.6146C117.463 14.6146 117.683 14.5417 117.902 15.0521C118.122 15.5625 118.634 16.875 118.707 16.9479C118.78 17.0938 118.78 17.2396 118.707 17.3854C118.634 17.5312 118.561 17.6771 118.415 17.8229C118.268 17.9687 118.122 18.1875 118.049 18.2604C117.902 18.4062 117.756 18.5521 117.902 18.7708C118.049 19.0625 118.561 19.8646 119.366 20.5937C120.39 21.4687 121.195 21.7604 121.488 21.9063C121.78 22.0521 121.927 21.9792 122.073 21.8333C122.22 21.6875 122.732 21.1042 122.878 20.8125C123.024 20.5208 123.244 20.5938 123.463 20.6667C123.683 20.7396 125 21.3958 125.22 21.5417C125.512 21.6875 125.659 21.7604 125.732 21.8333C125.805 22.0521 125.805 22.5625 125.585 23.1458Z" fill="white"/>
                        <rect x="150" width="40" height="40" rx="20" fill="#18A0FB"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M161.262 27.0568C160.87 26.9408 160.512 26.7343 160.219 26.4549C159.926 26.1754 159.705 25.8312 159.577 25.4512C158.843 23.4874 158.625 15.2869 160.039 13.6681C160.51 13.1414 161.174 12.8172 161.888 12.7658C165.68 12.3677 177.397 12.4208 178.743 12.8985C179.122 13.0183 179.467 13.2203 179.755 13.4891C180.042 13.758 180.263 14.0868 180.402 14.451C181.204 16.4812 181.231 23.8589 180.293 25.8095C180.044 26.3173 179.627 26.7285 179.11 26.9772C177.697 27.6672 163.138 27.6539 161.262 27.0568ZM167.284 23.2087L174.081 19.7587L167.284 16.2821V23.2087Z" fill="white"/>
                        <rect y="0.00012207" width="40" height="40" rx="20" fill="#18A0FB"/>
                        <path d="M28 12.6023L24.9946 28.2924C24.9946 28.2924 24.5741 29.3802 23.4189 28.8585L16.4846 23.3527L16.4524 23.3365C17.3891 22.4655 24.6524 15.7028 24.9698 15.3962C25.4613 14.9215 25.1562 14.6389 24.5856 14.9975L13.8568 22.0531L9.71764 20.6109C9.71764 20.6109 9.06626 20.3709 9.00359 19.8492C8.9401 19.3267 9.73908 19.044 9.73908 19.044L26.6131 12.1891C26.6131 12.1891 28 11.5581 28 12.6023Z" fill="white"/>
                        <path d="M250 20C250 8.95431 258.954 0 270 0V0C281.046 0 290 8.95431 290 20V20C290 31.0457 281.046 40 270 40V40C258.954 40 250 31.0457 250 20V20Z" fill="#18A0FB"/>
                        <path d="M271.929 21.9286C270.357 23.55 270.243 25.5714 270.107 30C274.236 30 277.086 29.9857 278.557 28.5571C279.986 27.0857 280 24.1 280 20.1071C275.571 20.25 273.55 20.3571 271.929 21.9286ZM260 20.1071C260 24.1 260.014 27.0857 261.443 28.5571C262.914 29.9857 265.764 30 269.893 30C269.75 25.5714 269.643 23.55 268.071 21.9286C266.45 20.3571 264.429 20.2429 260 20.1071ZM269.893 10C265.771 10 262.914 10.0143 261.443 11.4429C260.014 12.9143 260 15.9 260 19.8929C264.429 19.75 266.45 19.6429 268.071 18.0714C269.643 16.45 269.757 14.4286 269.893 10ZM271.929 18.0714C270.357 16.45 270.243 14.4286 270.107 10C274.236 10 277.086 10.0143 278.557 11.4429C279.986 12.9143 280 15.9 280 19.8929C275.571 19.75 273.55 19.6429 271.929 18.0714Z" fill="white"/>
                    </svg>


                </Grid2>

                <Grid2 item xs={12} md={4} sx={{textAlign: 'end'}}>
                    <p className={"mon-body-14-reg"}>Created by <a href={"https://github.com/Mirra11Ba"}>Mirra11Ba</a></p>
                </Grid2>



            </Grid2>


        </Box>

    );
};
