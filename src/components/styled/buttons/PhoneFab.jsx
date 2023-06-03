import {Button, Fab, styled} from "@mui/material";

export const PhoneFab = styled(Button)(({theme}) => ({
    boxShadow: 'none',
    borderRadius: '50%',
    height: '80px',
    width: '80px',
    // color: theme.palette.custom.white,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
    },
    // "&:active": {
    //     backgroundColor: theme.palette.primary.light,
    // },
}))