import React from 'react';
import WrapperMainContent from "../../components/layout/wrappers/Wrapper-main-content";
import AdvantageList from "../../components/advantage/AdvantageList";
import Trip from "../../components/trip/Trip";
import Faq from "../../components/Faq/Faq";
import classes from "../../components/Faq/Faq.module.css";
import ImgSkyScraper from "../../media/images/vysotnye-domaa.webp";
import Box from "@mui/material/Box";
import WrapperCss from "../../components/layout/wrappers/Wrapper.css";

const AbotUs = () => {
    return (
        <>
            <Box sx={{
                width: "100%",
                height: "520px",
            }}>
                <img src={ImgSkyScraper} alt="Высотные здания" style={{
                    width: "100%",
                    height: "inherit",
                    objectFit: "cover",
                }}/>
                <WrapperMainContent>
                    <Box sx={{
                        position: "flex",
                        alignContent: "center",
                        marginBottom: "20%",
                    }}>
                        <h2>Мы агентство недвижимости в Краснодаре «Дом 23»</h2>
                        <p className={""}>
                            Помогаем найти и купить землю, частный дом или квартиру в новостройке от застройщика.
                        </p>
                    </Box>
                </WrapperMainContent>
            </Box>

            <WrapperMainContent>
                <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Почему нас выбирают</h3>
                <ul className={`${classes.numberedList} mon-list-24-reg`}>
                    <li><span className={classes.circle}>1</span>Помогаем в выборе и покупке земельного участка, дома,
                        квартиры.
                    </li>
                    <li><span className={classes.circle}>2</span>Работаем с первичным рынком - есть готовая недвижимость, а
                        так же в стройке.
                    </li>
                    <li><span className={classes.circle}>3</span>Сотрудничаем с крупными застройщиками страны и города.</li>
                    <li><span className={classes.circle}>4</span>У нас приобретают недвижимость люди со всей России.</li>
                    <li><span className={classes.circle}>5</span>Наш опыт работы в сфере недвижимости более 15 лет.</li>
                </ul>

                <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Преимущества</h3>
                <AdvantageList/>

                <h3 style={{marginBottom: "30px", marginTop: "80px"}}>FAQ</h3>
                <Faq/>

                <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Преимущества</h3>
                <Trip/>
            </WrapperMainContent>
        </>
    );
};

export default AbotUs;