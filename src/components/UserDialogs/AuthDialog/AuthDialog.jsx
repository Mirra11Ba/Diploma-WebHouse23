import React, {useState} from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import {SmallButton} from "../../styled/buttons/SmallButton";
import {CardButtonOutlined} from "../../styled/buttons/CardButtonOutlined";
import {CardButton} from "../../styled/buttons/CardButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {styled} from "@mui/material";
import {RegularButton} from "../../styled/buttons/RegularButton";
import user from "../../../store/user";

const AuthDialog = ({open, setOpen}) => {


    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [isReg, setIsReg] = useState(false);

    const handleLoginChange = (e) => {
        setLogin(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handlePatronymic = (e) => {
        setPatronymic(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleNewPassword = (e) => {
        setNewPassword(e.target.value)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleToggleReg = () => {
        setIsReg(prev => !prev);
    }

    const handleAuth = async () => {
        const isAuth = await user.login(login, password)
        if (isAuth) {
            setOpen(false)
        } else {

        }
    }

    const handleReg = async () => {
        const isReg = await user.reg(firstName, lastName, patronymic, email, newPassword, phone)
        if (isReg) {
            setOpen(false);
        } else {

        }
    }

    const authContent = <DialogContent>

        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2
        }}>
            <TextField
                sx={{width: '100%'}}
                placeholder={'Email'}
                value={login}
                onChange={handleLoginChange}
            />
            <TextField
                sx={{width: '100%'}}
                placeholder={'Пароль'}
                type={'password'}
                value={password}
                onChange={handlePasswordChange}
            />

            <RegularButton
                variant={'contained'}
                sx={{width: '100%', color: 'white'}}
                onClick={handleAuth}
            >
                Войти
            </RegularButton>
            <RegularButton
                variant={'outlined'}
                sx={{width: '100%'}}
                onClick={handleToggleReg}
            >
                Зарегистрироваться
            </RegularButton>
        </Box>
    </DialogContent>

    const regContent = <DialogContent>

        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2
        }}>
            <TextField
                sx={{width: '100%'}}
                placeholder={'Фамилия'}
                value={lastName}
                onChange={handleLastName}
            />
            <TextField
                sx={{width: '100%'}}
                placeholder={'Имя'}
                value={firstName}
                onChange={handleFirstName}
            />

            <TextField
                sx={{width: '100%'}}
                placeholder={'Отчество'}
                value={patronymic}
                onChange={handlePatronymic}
            />

            <TextField
                sx={{width: '100%'}}
                placeholder={'Телефон'}
                value={phone}
                onChange={handlePhone}
            />
            <TextField
                sx={{width: '100%'}}
                placeholder={'Email'}
                value={email}
                onChange={handleEmail}
            />
            <TextField
                sx={{width: '100%'}}
                placeholder={'Пароль'}
                type={'password'}
                value={newPassword}
                onChange={handleNewPassword}
            />

            <RegularButton
                variant={'contained'}
                sx={{width: '100%', color: 'white'}}
                onClick={handleReg}
            >
                Зарегистрироваться
            </RegularButton>
            <RegularButton
                variant={'outlined'}
                sx={{width: '100%'}}
                onClick={handleToggleReg}
            >
                Уже зарегистрированы?
            </RegularButton>
        </Box>
    </DialogContent>

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth={'xs'}
            fullWidth
            sx={{
                p: 2
            }}
        >
            <DialogTitle>
                <h4>Авторизация</h4>
            </DialogTitle>
            {isReg
                ? regContent
                : authContent
            }

        </Dialog>
    );
};

export default AuthDialog;