import React from 'react';
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {Outlet, Navigate, useNavigate, Link} from 'react-router-dom';
import user from "../../../store/user";


const ProfilePage = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };

    //const navigate = useNavigate();

    if (!user.isAuth) {
        return (<Navigate to={'/'}/>);
    }



    return (
        <Grid container spacing={1} sx={{
            maxWidth: '1200px',
            display: 'flex',
            margin: 'auto'
        }}>

            <Grid item xs={2} sx={{
                display: {xs: 'none', md: 'flex'}
            }}>

                <List>
                    <ListItemButton component={Link} to={'data'}>
                        Мои данные
                    </ListItemButton>
                    <ListItemButton  component={Link} to={'bookings'}>
                        Мои брони
                    </ListItemButton>
                    <ListItemButton  component={Link} to={'favorite'}>
                        Избранное
                    </ListItemButton>
                </List>

            </Grid>

            <Grid item xs={12} md={10} sx={{

            }}>

                <Outlet/>

            </Grid>


        </Grid>
    );
};

export default ProfilePage;