import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import HouseCardItem from "./HouseCardItem";
import ImgHouse from "../../media/images/dom.jpg";


export default function HouseCardList(props) {
    const housesArr = [
        {
            id: 1,
            img: ImgHouse,
            titleName: "10x12",
            price: "10 000 000",
            numberFloors: "2",
            area: "100",
            landPlotSize: "4",
        },
        {
            id: 2,
            img: ImgHouse,
            titleName: "10x12",
            price: "10 000 000",
            numberFloors: "2",
            area: "100",
            landPlotSize: "4",
        },
        {
            id: 3,
            img: ImgHouse,
            titleName: "10x12",
            price: "10 000 000",
            numberFloors: "2",
            area: "100",
            landPlotSize: "4",
        },
    ];
    const list = housesArr.map(house =>
        <HouseCardItem img={house.img} titleName={house.titleName} price={house.price} numberFloors={house.numberFloors} area={house.area} landPlotSize={house.landPlotSize}/>
    )
    return (
        <Grid2 container sx={{
            gap: {
                xs: "20px",
                sm: "35px",
                lg: "19px",
            },
            alignItems: "flex-start",
            justifyContent: "center",
        }}>
            {list}
        </Grid2>
    )
}