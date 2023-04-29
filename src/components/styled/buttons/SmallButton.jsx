import React from "react";
import {Button, styled} from "@mui/material";
import {house23Theme} from "../../../style/themes";
import IndexCss from "../../../style/index.css";

export const SmallButton = styled(Button)(({theme}) =>
    ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.custom.white,
            boxShadow: "none",

        height: "36px",
        width: "141px",
        textTransform: 'none',

        // mon-small-button-14-reg
        fontFamily: "Montserrat",
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "36px",
        letterSpacing: "0px",
    }),
);


