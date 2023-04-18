import React from "react";
import ImgIpoteka from "../../media/images/ipoteka.webp";
import ImgMaterinskijKapital from "../../media/images/materinskij-kapital.webp";
import ImgRassrochka from "../../media/images/rassrochka.webp";
import ImgVoenIpoteka from "../../media/images/voennaya-ipoteka.webp"
import classes from "./PaymentMethod.module.css";
import PropTypes from "prop-types";
import Grid2 from "@mui/material/Unstable_Grid2";
import Css from "../layout/wrappers/Wrapper.css";

export default function PaymentMethodItem() {
    // const {icon, text} = props;
    return (
        // <div className={classes.card}>
        //     <div className={classes.flexItemContainer}>
        //         <img className={classes.icon} src={icon}/>
        //         <div className={classes.text}>{text}</div>
        //     </div>
        // </div>
        <Grid2 container spacing={4}>
            <Grid2>
                <div className={classes.card}>
                    <img className={classes.img} src={ImgIpoteka}/>
                </div>
            </Grid2>
            <Grid2 className={classes.card} style={{border: "1px solid black"}}>
                <h3>Ипотека</h3>
                <p>Рассчитайте ежемесячный платёж и проконсультируйтесь с нашим специалистом:</p>
                <ul>
                    <li>ипотека без первоначального взноса</li>
                    <li>ипотека для IT-специалистов</li>
                    <li>семейная ипотека</li>
                    <li>ипотека с господдержкой</li>
                </ul>

            </Grid2>
            <hr/>

            <Grid2>
                <img className={classes.card} src={ImgIpoteka}/>
            </Grid2>
            <Grid2 className={classes.card} style={{border: "1px solid black"}}>
                <h3>Ипотека</h3>
                <p>Рассчитайте ежемесячный платёж и проконсультируйтесь с нашим специалистом:</p>
                <ul>
                    <li>ипотека без первоначального взноса</li>
                    <li>ипотека для IT-специалистов</li>
                    <li>семейная ипотека</li>
                    <li>ипотека с господдержкой</li>
                </ul>
            </Grid2>
            <hr/>

        </Grid2>

    );
};

// AdvantageItem.propTypes = {
//     icon: PropTypes.object,
//     text: PropTypes.string
// }