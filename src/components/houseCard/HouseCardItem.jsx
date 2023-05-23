import React from "react";
import PropTypes from "prop-types";
import Grid2 from "@mui/material/Unstable_Grid2";
import classes from "./HouseCard.module.css";
import {SmallButton} from "../styled/buttons/SmallButton";
import {Button} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function HouseCardItem(props) {
    const {img, titleName, price, numberFloors, area, landPlotSize} = props;
    return (
        <Grid2 container sx={{
            gap: {
                sm: "10px",
                md: "15px",
            },
            height: "auto",
            width: "387px",
            borderTopRightRadius: "15px",
            borderTopLeftRadius: "15px",
            borderBottomRightRadius: "15px",
            borderBottomLeftRadius: "15px",
            border: "1px solid var(--dark-space-50)",
        }}>
            <Box sx={{
                width: "387px",
                height: "auto",
                borderTopRightRadius: "15px",
                borderTopLeftRadius: "15px",
                borderBottomRightRadius: "15px",
                borderBottomLeftRadius: "15px",
            }}>
                    <img style={{
                        width: "100%",
                        height: "auto",
                        borderTopRightRadius: "15px",
                        borderTopLeftRadius: "15px",
                    }} src={img}/>
            </Box>
            <Box>
                <h5>Дом {titleName}</h5>
            </Box>
            <IconButton
                size="large"
                aria-label="Избранное"
                aria-controls="menu-appbar"
                aria-haspopup="true">
                    <FavoriteBorderIcon/>
            </IconButton>
            <Box>
                <IconButton>
                </IconButton>
            </Box>
            <Box>
                <p className={"mon-price-20-bol"} sx={{color: "var(--neptune-blue)"}}>{price} ₽</p>
            </Box>
            <Box className={"mon-body-16-reg"}>
                Этажи: {numberFloors}
                Площадь дома: {area} м²
                Участок: {landPlotSize} сотки
            </Box>
            <Box>
                <SmallButton variant="contained">Бронь на показ</SmallButton>
                <SmallButton variant="outlined">Подробнее</SmallButton>
            </Box>
        </Grid2>
    );
};

// HouseCardItem.propTypes = {
//     img: PropTypes.object,
//     titleName: PropTypes.string,
//     price: PropTypes.string,
//     numberFloors: PropTypes.string,
//     area: PropTypes.string,
//     landPlotSize: PropTypes.string,
// }