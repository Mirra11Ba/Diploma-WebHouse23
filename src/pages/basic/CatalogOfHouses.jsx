import React, {useEffect, useState} from 'react';
import FilterForm from "../../components/FilterForm/FilterForm";
import house from "../../store/house";
import {observer} from "mobx-react-lite";
import Grid from "@mui/material/Grid";
import HouseCardItem from "../../components/houseCard/HouseCardItem";
import WrapperMainContent from "../../components/layout/wrappers/Wrapper-main-content";
import CallBackFormDialog from "../../components/UserDialogs/CallBackFormDialog/CallBackFormDialog";


const CatalogOfHouses = observer(() => {

    const [houses, setHouses] = useState([])

    useEffect(() => {
        setHouses(house.houses)
    }, [])

    useEffect(() => {
        setHouses(house.houses)
    }, [JSON.stringify(house.houses)])

    return (
        <WrapperMainContent>
            <FilterForm callback={setHouses}/>

            <h4 style={{paddingBottom: "30px"}}>Наши дома</h4>

            <Grid container spacing={2}>
                {houses.map(item => (
                    <Grid item xs={4}>
                        <HouseCardItem house={item}/>
                    </Grid>
                ))}
            </Grid>
            <CallBackFormDialog/>
        </WrapperMainContent>
    );
});

export default CatalogOfHouses;