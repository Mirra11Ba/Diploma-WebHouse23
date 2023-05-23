import React from "react";
import PropTypes from "prop-types";
import Grid2 from "@mui/material/Unstable_Grid2";
import classes from "./News.module.css";
import {SmallButton} from "../styled/buttons/SmallButton";


export default function NewsItem(props) {
    const {pict, title, text, btnLink} = props;
    return (
        <Grid2 container className={classes.card} sx={{
            gap: {
                sm: "10px",
                md: "15px",
            }
        }}>
            <Grid2>
                <div>
                    <img className={classes.img} src={pict}/>
                </div>
            </Grid2>
            <Grid2>
                <h4 className={classes.title}>{title}</h4>
            </Grid2>
            <Grid2>
                <p className={`${classes.text} mon-body-16-reg`}>{text}</p>
                <SmallButton href={btnLink} variant="contained">Читать далее</SmallButton>
            </Grid2>
        </Grid2>
    );
};

NewsItem.propTypes = {
    pict: PropTypes.object,
    title: PropTypes.string,
    text: PropTypes.string,
    btnLink: PropTypes.string,
}