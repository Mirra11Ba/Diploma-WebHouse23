import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ImgLogo from "../../../media/images/logo/house-23-logo.png";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {MenuButton} from "../../styled/buttons/MenuButton";
import {AccountCircleOutlined} from "@mui/icons-material";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import {Link, useLocation} from "react-router-dom";
import Divider from "@mui/material/Divider";
import user from "../../../store/user";
import AuthDialog from "../../UserDialogs/AuthDialog/AuthDialog";
import {observer} from "mobx-react-lite";


const pages = [
    {title: "Главная", url: '/'},
    {title: "Дома", url: '/catalog'},
    {title: "Способы оплаты", url: '/payments'},
    {title: "Услуги", url: '/services'},
    {title: "О нас", url: '/about'},
    {title: "Контакты", url: '/contacts'},
];

const newPages = [
    {title: 'Products', value: 'products'}
]



const Header = observer(() => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [isOpen, setIsOpen] = React.useState(false);
    const [isAuthOpen, setIsAuthOpen] = React.useState(false);
    const location = useLocation();
    console.log(location)

    const settings = [
        {title: 'Профиль', url: '/profile'},
        {title: 'Избранное', url: '/'},
        {title: 'Брони', url: '/'},
        {title: user.isAuth ? 'Выйти' : 'Войти', url: 'auth'},
        {title: 'Администрирование', url: '/admin'},
    ];

    const handleAuth = () => {
        if (user.isAuth) {
            user.logout()
        } else {
            setIsAuthOpen(true);
        }
        handleCloseUserMenu()
    }

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenDrawer = () => {
        setIsOpen(!isOpen);
    }

    const menuButton = pages.map((page) => (
        <MenuButton
            key={page.url}
            component={Link}
            to={page.url}
            sx={{my: 2, display: 'block', borderBottom: location.pathname === page.url ? '1px solid blue' : '0px', borderRadius: 0, }}
        >
            {page.title}
        </MenuButton>
    ))

    return (
        <AppBar position="sticky"
                sx={{background: "white", boxShadow: "none", borderBottom: "1px solid rgba(27, 28, 55, 0.5)"}}>
            <Container maxWidth="xl">

                <Toolbar disableGutters>
                    
                    {/*блок с логотипом*/}
                    <Box sx={{display: {xs: 'flex', md: 'flex'}, mr: 2, flexGrow: {xs: 1, md: 1.7}, justifyContent: {xs: 'start', md: 'end'}}}>
                        <img src={ImgLogo}/>
                    </Box>

                    {/*блок с пунктами меню*/}
                    <Box sx={{flexGrow: 4, display: {xs: 'none', md: 'flex'}, justifyContent: 'center'}}>
                        {pages.map((page) => (
                            <MenuButton
                                key={page.url}
                                component={Link}
                                to={page.url}
                                sx={{my: 2, display: 'block', borderBottom: location.pathname === page.url ? '3px solid var(--neptune-blue)' : '0px', borderRadius: 0, }}
                            >
                                {page.title}
                            </MenuButton>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: {xs: 0, md: 1}, display: {xs: 'none', md: 'flex'}}}>
                        <p className={"mon-menu-16-med"}>
                            <a style={{textDecoration: "none", color: "black"}}
                               href={"tel: +79182505588"}>+7(918)250-55-88
                            </a>
                        </p>
                    </Box>

                    {/*блок с икнокой пользователя*/}
                    <Box sx={{flexGrow: {xs: 0, md: 1.7}}}>
                        <Tooltip title="Открыть профиль">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        color="inherit"
                            >
                                <PersonOutlinedIcon/>
                                {/*<AccountCircleOutlined/>*/}
                                {/*<Avatar alt="User" src="/static/images/avatar/2.jpg" />*/}
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px', '& ul': {padding: 0}, '& hr': {margin: 0}}}
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
                            {settings.map((setting) => {


                                return setting.url === 'auth'
                                    ?  <div>
                                    <MenuItem
                                        key={setting}
                                        onClick={handleAuth}>
                                        <Typography textAlign="center" sx={{width: '100%'}}>{setting.title}</Typography>
                                    </MenuItem>
                                    <Divider sx={{width: '100%'}}/>
                                </div>
                                :
                                     <div><MenuItem
                                        key={setting}
                                        component={Link}
                                        to={setting.url}
                                        onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center" sx={{width: '100%'}}>{setting.title}</Typography>
                                    </MenuItem>
                                        <Divider sx={{width: '100%'}}/></div>

                            })}
                        </Menu>
                        <AuthDialog open={isAuthOpen} setOpen={setIsAuthOpen}/>
                    </Box>
                    {/*блок с бургером и контекстным меню*/}
                    <Box sx={{flexGrow: 0, display: {xs: "flex", md: "none"}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenDrawer}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Drawer
                            anchor={"right"}
                            open={isOpen}
                            onClose={handleOpenDrawer}
                        >
                            {<List sx={{p: 2}} onClick={handleOpenDrawer}>

                                {menuButton}

                            </List>}
                        </Drawer>

                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
})

export default Header;