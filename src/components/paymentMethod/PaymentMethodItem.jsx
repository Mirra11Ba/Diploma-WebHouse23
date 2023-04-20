import React from "react";
import ImgIpoteka from "../../media/images/ipoteka.webp";
import ImgMaterinskijKapital from "../../media/images/materinskij-kapital.webp";
import ImgRassrochka from "../../media/images/rassrochka.webp";
import ImgVoenIpoteka from "../../media/images/voennaya-ipoteka.webp"
import classes from "./PaymentMethod.module.css";
import PropTypes from "prop-types";
import Grid2 from "@mui/material/Unstable_Grid2";
import Css from "../layout/wrappers/Wrapper.css";
import {Container} from "@mui/material";

export default function PaymentMethodItem() {
    // const {icon, text} = props;
    return (

        <Grid2 container style={{gap: "22px"}}>
            <Grid2 className={classes.card}>
                <img className={classes.img} src={ImgIpoteka}/>
            </Grid2>
            <Grid2 className={classes.card} style={{border: "1px solid black"}}>
                <Container>
                    <Grid2 style={{padding: "88px 53px 88px 53px"}}>
                        <h4 className={classes.title}>Ипотека</h4>
                        <p  className={classes.text}>Рассчитайте ежемесячный платёж и проконсультируйтесь с нашим специалистом:</p>
                        <ul>
                            <li>ипотека без первоначального взноса</li>
                            <li>ипотека для IT-специалистов</li>
                            <li>семейная ипотека</li>
                            <li>ипотека с господдержкой</li>
                        </ul>
                    </Grid2>
                </Container>

            {/*    <h4 className={classes.title}>Ипотека</h4>*/}
            {/*    <p className={classes.text}>Рассчитайте ежемесячный платёж и проконсультируйтесь с нашим специалистом:</p>*/}
            {/*    <ul className={classes.ul}>*/}
            {/*        <li>ипотека без первоначального взноса</li>*/}
            {/*        <li>ипотека для IT-специалистов</li>*/}
            {/*        <li>семейная ипотека</li>*/}
            {/*        <li>ипотека с господдержкой</li>*/}
            {/*    </ul>*/}
            </Grid2>

            <Grid2 className={classes.card}>
                <img className={classes.img} src={ImgIpoteka}/>
            </Grid2>
            <Grid2 className={classes.card} style={{border: "1px solid black"}}>
                <h4 className={classes.title}>Ипотека</h4>
                <p className={classes.text}>Рассчитайте ежемесячный платёж и проконсультируйтесь с нашим специалистом:</p>
                <ul className={classes.ul}>
                    <li>ипотека без первоначального взноса</li>
                    <li>ипотека для IT-специалистов</li>
                    <li>семейная ипотека</li>
                    <li>ипотека с господдержкой</li>
                </ul>
            </Grid2>
        </Grid2>



    );
};