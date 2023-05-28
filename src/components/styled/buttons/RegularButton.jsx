import {styled} from "@mui/material";
import Button from "@mui/material/Button";

export const RegularButton = styled(Button)(({theme}) => ({
    textTransform: 'none',
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: "500",
    boxShadow: "none",
    height: '48px'
}))