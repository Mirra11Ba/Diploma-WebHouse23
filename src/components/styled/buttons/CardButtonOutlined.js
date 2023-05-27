import styled from "@emotion/styled";
import Button from "@mui/material/Button";


export const CardButtonOutlined = styled(Button)(({theme}) => ({
    textTransform: 'none',
    fontFamily: "Montserrat",
    color: theme.palette.primary.main,
    fontSize: "14px",
    height: "36px",
}))