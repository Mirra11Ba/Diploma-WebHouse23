import {Button, Fab, styled} from "@mui/material";

export const PhoneFab = styled(Button)(({theme}) => ({
    boxShadow: 'none',
    borderRadius: '50%',
    height: '70px',
    width: '70px',
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        // boxShadow: ,
    },
    position: 'flex',
    alignContent: 'center',
}))