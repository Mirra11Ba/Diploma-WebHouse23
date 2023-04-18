import React, {useState} from 'react';
import classes from "./Advantage.module.css";
import PropTypes from "prop-types";
import IcoCottage from "../../media/svg/cottage.svg";
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2


export default function AdvantageItem(props) {
    const {icon, text} = props;
    return (
        <div className={classes.card}>
            <div className={classes.flexItemContainer}>
                <img className={classes.icon} src={icon}/>
                <div className={`${classes.text} ${"mon-body-18-reg"}`}>{text}</div>
            </div>
        </div>
    );
};

AdvantageItem.propTypes = {
    icon: PropTypes.object,
    text: PropTypes.string
}


