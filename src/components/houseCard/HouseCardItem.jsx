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
import {CardButton} from "../styled/buttons/CardButton";
import {CardButtonOutlined} from "../styled/buttons/CardButtonOutlined";


export default function HouseCardItem(props) {
    const {house} = props;

    const splitNumber = (number) => {
        const arr = String(number).split('').map(n => Number(n)).reverse();
        let newArr = [];
        for (let i = 0; i < arr.length; i += 3) {
            const chunk = arr.slice(i, i + 3);
            console.log(chunk)
            newArr.push(chunk)
        }
        console.log(newArr)
        return newArr;
    }

    return (
        <Grid2 container sx={{
            gap: {

            },
            height: "auto",
            width: "387px",
            border: "none",

        }}>
            <Grid2 item xs={12} sx={{
                width: "387px",
                height: "264px",
            }}>
                    <img style={{
                        width: "100%",
                        height: "264px",
                        borderTopRightRadius: "15px",
                        borderTopLeftRadius: "15px",
                    }} src={house.image}/>
            </Grid2>

            <Grid2 item xs={12} sx={{
                p: {xs: 1, sm: 2.5},
                pt: 0,
                border: '1px solid var(--dark-space-50)',
                borderBottomRightRadius: "15px",
                borderBottomLeftRadius: "15px",
            }}>
                <Grid2 item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <h5>{house.name}</h5>
                    <IconButton
                        size="large"
                        aria-label="Избранное"
                        aria-controls="menu-appbar"
                        aria-haspopup="true">
                        <FavoriteBorderIcon sx={{
                            color: 'black',
                            width: '33px',
                            height: '33px'
                        }}/>
                    </IconButton>
                </Grid2>

                <Grid2 item xs={12} sx={{pt: {xs: 0, sm: 1}}}>
                    <p className={"mon-price-20-bol"} style={{color: "var(--neptune-blue)"}}>
                        {splitNumber(house.price).reverse().map(i => {
                            i = i.join('');
                            return `${i} `
                        })} ₽
                    </p>
                </Grid2>
                <Box className={"mon-body-16-reg"} sx={{
                    py: 2
                }}>
                    Этажи: {house.numberOfFloors}{<br/>}
                    Площадь дома: {house.area} м²{<br/>}
                    Участок: {house.landPlotSize} сотки{<br/>}
                </Box>
                <Grid2 item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <CardButton variant="contained">Бронь на показ</CardButton>
                    <CardButtonOutlined variant="outlined">Подробнее</CardButtonOutlined>
                </Grid2>
            </Grid2>
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