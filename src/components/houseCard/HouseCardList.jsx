import React, {useEffect, useState} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import HouseCardItem from "./HouseCardItem";
import ImgHouse from "../../media/images/dom.jpg";
import {observer} from "mobx-react-lite";


const HouseCardList = observer(({houses}) => {



    const list = houses.map(house =>
        <HouseCardItem house={house}/>
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
})

export default HouseCardList;