import React, {useEffect, useState} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import HouseCardItem from "./HouseCardItem";
import ImgHouse from "../../media/images/dom.jpg";
import {observer} from "mobx-react-lite";
import Grid from "@mui/material/Grid";


const HouseCardList = observer(({houses}) => {



    const list = houses.map(house =>
        <Grid item lg={4} md={6} xs={12} sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <HouseCardItem house={house}/>
        </Grid>
    )
    return (
        <Grid container spacing={2} sx={{
            /*gap: {
                xs: "20px",
                sm: "35px",
                lg: "19px",
            },*/
            alignItems: "flex-start",
            justifyContent: "center",
        }}>
            {list}
        </Grid>
    )
})

export default HouseCardList;