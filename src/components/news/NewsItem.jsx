import React from "react";
import PropTypes from "prop-types";
import Grid2 from "@mui/material/Unstable_Grid2";
import classes from "./News.module.css";
import ImgZkElegeant from "../../media/images/zhiloj-kompleks-elegeant.webp";
import ImgZkFontany from "../../media/images/zhk-fontany-krasnodar.webp";
import ImgZkStriji from "../../media/images/zhk-striji-krasnodar.webp";
import Button from "@mui/material/Button";
import AdvantageItem from "../advantage/AdvantageItem";


export default function NewsItem(props) {
    const {pict, title, text, btnText} = props;
    return (
        <Grid2 container className={classes.card} sx={{
            gap: {
                sm: "10px",
                md: "15px",
            }
        }}>
            <Grid2>
                <img className={classes.img} src={pict}/>
            </Grid2>
            <Grid2>
                <h4 className={classes.title}>{title}</h4>
            </Grid2>
            <Grid2>
                <p className={`${classes.text} mon-body-16-reg`}>{text}</p>
                <Button variant="outlined">{btnText}</Button>
            </Grid2>
        </Grid2>
    );
};

NewsItem.propTypes = {
    pict: PropTypes.object,
    title: PropTypes.string,
    text: PropTypes.string,
    btnText: PropTypes.string,
}