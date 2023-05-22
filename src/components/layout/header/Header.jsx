import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ImgLogo from "../../../media/images/house-23-logo.png";
import {useState} from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {MenuButton} from "../../styled/buttons/MenuButton";
import classes from "../../news/News.module.css";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {AccountCircleOutlined} from "@mui/icons-material";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const pages = [
    "Главная", "Дома", "Способы оплаты", "Услуги", "О нас", "Контакты",
];

const newPages = [
    {title: 'Products', value: 'products'}
]

const settings = ['Профиль', 'Избранное', 'Брони', 'Выйти'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenDrawer = () => {
        setIsOpen(!isOpen);
    }

    return (
        <AppBar position="sticky" sx={{background: "white", boxShadow: "none", borderBottom: "1px solid rgba(27, 28, 55, 0.5)"}}>
            <Container maxWidth="xl">

                <Toolbar disableGutters>
                    {/*блок с бургером и контекстным меню*/}
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenDrawer}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor={"top"}
                            open={isOpen}
                            onClose={handleOpenDrawer}
                        >
                            {<List>
                                {settings.map((item) => (
                                    <ListItem key={item}>
                                        <ListItemButton>
                                            {/*<ListItemIcon>
                                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                            </ListItemIcon>*/}
                                            <ListItemText primary={item}/>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                                {/* <ListItem>
                                    <Typography>
                                        123123
                                    </Typography>
                                </ListItem>*/}
                            </List>}
                        </Drawer>
                        <Menu
                            id="menu-appbar"
                            anchorEl={ImgLogo}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/*блок с логотипом*/}
                    <Box sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1, flexGrow: {xs: 1, md: 1} }}>
                        <img src={ImgLogo} />
                    </Box>

                    {/*блок с пунктами меню*/}
                    <Box sx={{ flexGrow: 4, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <MenuButton
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'block' }}
                            >
                                {page}
                            </MenuButton>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: {xs: 0, md: 1 }, display: { xs: 'none', md: 'flex' }}}>
                        <p className={"mon-menu-16-med"}><a style={{textDecoration: "none", color: "black"}} href={"tel: +79182505588"}>+7(918)250-55-88</a></p>
                    </Box>

                    {/*блок с икнокой пользователя*/}
                    <Box sx={{ flexGrow: {xs: 0, md: 1.7 }}}>
                        <Tooltip title="Открыть профиль">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <PersonOutlinedIcon/>
                                <AccountCircleOutlined/>
                                <Avatar alt="User" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;