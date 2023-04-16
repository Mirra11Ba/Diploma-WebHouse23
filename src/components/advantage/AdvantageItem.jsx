import React, {useState} from 'react';
import classes from "./Advantage.module.css";
import PropTypes from "prop-types";

export default function AdvantageItem(props) {
    const {icon, text} = props;
    return (
        <div className={classes.card}>
            <img className={classes.icon} src={icon}></img>
            <div className={classes.text}>{text}</div>
        </div>
    );
};

AdvantageItem.propTypes = {
    icon: PropTypes.object,
    text: PropTypes.string
}


