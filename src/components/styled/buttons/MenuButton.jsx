import {Button, styled} from "@mui/material";

export const MenuButton = styled(Button)(({theme}) =>
    ({
        // backgroundColor: theme.palette.custom.white,
        color: theme.palette.custom.black,
        boxShadow: "none",
        textTransform: 'none',

        "&:hover": {
            backgroundColor: "rgba(24, 160, 251, 0.25)"
        },

        //mon-menu-16-med {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "20px",
        /* identical to box height, or 125% */
        letterSpacing: "0.03125em",
    }),
);
