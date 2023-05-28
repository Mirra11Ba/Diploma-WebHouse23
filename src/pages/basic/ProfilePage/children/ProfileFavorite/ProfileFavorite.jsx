import React from 'react';
import Grid from "@mui/material/Grid";
import HouseCardItem from "../../../../../components/houseCard/HouseCardItem";
import favourites from "../../../../../store/favourites";

export const loader = async () => {

    await favourites.fetchFavourites()
    return null

}

const ProfileFavorite = () => {



    return (
        <Grid container spacing={2} sx={{
            display: 'flex',
            justifyContent: {xs: 'center', md: 'start'}
        }}>

            {favourites.favourites.map(item => (
                <Grid item lg={4} md={6} sm={12} sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <HouseCardItem house={item.house}/>
                </Grid>
            ))}


        </Grid>
    );
};

export default ProfileFavorite;