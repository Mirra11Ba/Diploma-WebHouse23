import React from "react";
import ImgIpoteka from "../../media/images/ipoteka.webp";
import ImgMaterinskijKapital from "../../media/images/materinskij-kapital.webp";
import ImgRassrochka from "../../media/images/rassrochka.webp";
import ImgVoenIpoteka from "../../media/images/voennaya-ipoteka.webp"
import classes from "./PaymentMethod.module.css";
import PropTypes from "prop-types";
import Grid2 from "@mui/material/Unstable_Grid2";
import CssWrapper from "../layout/wrappers/Wrapper.css";
import {Container} from "@mui/material";
import CssIndex from "../../style/index.css";

export default function PaymentMethodItem() {
    return (
        <Grid2 container style={{
                            gap: "22px",
                            alignItems: "center",
                            justifyContent: "center",
        }}>
            {/*1*/}
            <Grid2 className={classes.card}>
                <img className={classes.img} src={ImgIpoteka}/>
            </Grid2>
            <Grid2 className={classes.card} >
                <Grid2 sx={{padding: {sm: '0px', lg: '93px 67px'} }}>
                    <h4 className={classes.titleMortgage}>Ипотека</h4>
                    <p  className={`${classes.textMortgage} mon-body-18-reg`}>Рассчитайте ежемесячный платёж и проконсультируйтесь с нашим специалистом:</p>
                    <ul className={"mon-body-18-reg"}>
                        <li>ипотека без первоначального взноса</li>
                        <li>ипотека для IT-специалистов</li>
                        <li>семейная ипотека</li>
                        <li>ипотека с господдержкой</li>
                    </ul>
                </Grid2>
            </Grid2>
            {/*<hr/>*/}

            {/*2*/}
            <Grid2 className={classes.card} >
                <Grid2 sx={{padding: {sm: '0px', lg: '88px 67px'} }}>
                    <h4 className={classes.titleMortgage}>Материнский капитал</h4>
                    <p  className={`${classes.textMortgage} mon-body-18-reg`}>
                        Его могут получить семьи с двумя и более детьми.
                        Сертификат выдается матери, родившей или усыновившей второго, третьего ребенка.
                        В некоторых случаях сертификат может быть использован отцом и самим ребенком.
                    </p>
                </Grid2>
            </Grid2>
            <Grid2 className={classes.card}>
                <img className={classes.img} src={ImgMaterinskijKapital}/>
            </Grid2>

        </Grid2>
    );
};