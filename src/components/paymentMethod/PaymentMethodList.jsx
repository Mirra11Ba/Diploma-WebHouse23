import React from "react";
import ImgIpoteka from "../../media/images/payment/ipoteka.webp";
import ImgMaterinskijKapital from "../../media/images/payment/materinskij-kapital.webp";
import ImgVoenIpoteka from "../../media/images/payment/voennaya-ipoteka.webp"
import ImgRassrochka from "../../media/images/payment/rassrochka.webp";
import classes from "./PaymentMethod.module.css";
import Grid2 from "@mui/material/Unstable_Grid2";
import {useMediaQuery, useTheme} from "@mui/material";
import {Divider} from "@mui/material";


export default function PaymentMethodList() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'))
    console.log(matches)

    const ipotekaRow1 = [
        (<Grid2 className={classes.card}>
            <img className={classes.img} src={ImgIpoteka}/>
        </Grid2>),
        (<Grid2 className={classes.card}>
                <Grid2 sx={{
                    padding: {
                        sm: '0px',
                        lg: '88px 67px'
                    }
                }}>
                    <h4 className={classes.title}>Ипотека</h4>
                    <p className={`${classes.text} mon-body-18-reg`}>Рассчитайте ежемесячный платёж и
                        проконсультируйтесь с нашим специалистом:</p>
                    <ul className={"mon-body-18-reg"}>
                        <li>ипотека без первоначального взноса</li>
                        <li>ипотека для IT-специалистов</li>
                        <li>семейная ипотека</li>
                        <li>ипотека с господдержкой</li>
                    </ul>
                </Grid2>
            </Grid2>
        )
    ]

    const voenIpotekaRow3 = [
        <Grid2 className={classes.card}>
            <img className={classes.img} src={ImgVoenIpoteka}/>
        </Grid2>,
        <Grid2 className={classes.card}>
            <Grid2 sx={{
                padding: {
                    sm: '0px',
                    lg: '77px 57px'
                }
            }}>
                <h4 className={classes.title}>Военная ипотека</h4>
                <p className={`${classes.text} mon-body-18-reg`}>
                    Менеджер по военной ипотеке ответит на вопросы и поможет собрать пакет документов
                    для ФГКУ «Росвоенипотека». Забота о каждом клиенте – основной принцип компании.
                </p>
                <p className={`${classes.text} mon-body-18-reg`}>
                    Менеджер подберет наиболее выгодные варианты и просчитает сумму максимального кредита по военной ипотеке.
                </p>
            </Grid2>
        </Grid2>
    ]

    return (
        <>
            <Grid2 container sx={{
                gap: {

                    xs: "15px",
                    lg: "22px",
                },
                alignItems: "center",
                justifyContent: "center",
            }}
                   className={classes.news}
            >


                {/*1*/}
                {matches
                    ? ipotekaRow1.map(item => (
                        item
                    ))
                    : ipotekaRow1.reverse().map(item => item)
                }

                <Divider
                    sx={{
                        width: {
                            xs: '0%',
                            lg: '80%',
                        },

                    }}
                />

                {/*2*/}
                <Grid2 container sx={{
                    gap: {
                        sm: "15px",
                        lg: "22px",
                    },
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Grid2 className={classes.card}>
                        <Grid2 sx={{
                            padding: {
                                sm: "0px",
                                lg: "84px 67px"
                            }
                        }}>
                            <h4 className={classes.title}>Материнский капитал</h4>
                            <p className={`${classes.text} mon-body-18-reg`}>Его могут получить семьи с двумя и более детьми.</p>
                            <p className={`${classes.text} mon-body-18-reg`}>Сертификат выдается матери, родившей или усыновившей второго, третьего ребенка.</p>
                            <p className={`${classes.text} mon-body-18-reg`}>В некоторых случаях сертификат может быть использован отцом и самим ребенком.</p>
                        </Grid2>
                    </Grid2>
                    <Grid2 className={classes.card}>
                        <img className={classes.img} src={ImgMaterinskijKapital}/>
                    </Grid2>
                </Grid2>

                <Divider
                    sx={{
                        width: {
                            xs: '0%',
                            lg: '80%',
                        },

                    }}
                />

                {/*3*/}
                <Grid2 container sx={{
                    gap: {
                        sm: "15px",
                        lg: "22px",
                    },
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    {matches
                        ? voenIpotekaRow3.map(item => (
                            item
                        ))
                        : voenIpotekaRow3.reverse().map(item => item)
                    }
                </Grid2>

                <Divider
                    sx={{
                        width: {
                            xs: '0%',
                            lg: '80%',
                        },

                    }}
                />

                {/*4*/}
                <Grid2 container sx={{
                    gap: {
                        sm: "15px",
                        lg: "22px",
                    },
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Grid2 className={classes.card}>
                        <Grid2 sx={{
                            padding: {
                                sm: "0px",
                                lg: "36px 67px"
                            }
                        }}>
                            <h4 className={classes.title}>Рассрочка</h4>
                            <p className={`${classes.text} mon-body-18-reg`}>
                                Это возможность приобрести собственное жилье прямо сейчас, без бумажной волокиты
                                и переплат с помощью удобной системной оплаты.
                            </p>
                            <p className={`${classes.text} mon-body-18-reg`}>Для получения рассрочки нужно:</p>
                            <ul className={"mon-body-18-reg"}>
                                <li>оплатить 50% от стоимости квартиры</li>
                                <li>оформить необходимые документы</li>
                            </ul>
                            <p className={`${classes.text} mon-body-18-reg`} style={{paddingTop: "7px"}}>Оставшуюся сумму вы выплачиваете частями в течение выбранного периода времени.</p>
                        </Grid2>
                    </Grid2>
                    <Grid2 className={classes.card}>
                        <img className={classes.img} src={ImgRassrochka}/>
                    </Grid2>
                </Grid2>


            </Grid2>
        </>
    );
};