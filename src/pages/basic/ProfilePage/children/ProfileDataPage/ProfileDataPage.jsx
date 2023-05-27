import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {RegularButton} from "../../../../../components/styled/buttons/RegularButton";
import DialogContent from "@mui/material/DialogContent";
import UserService from "../../../../../api/services/UserService";
import {passFilterLogic} from "@mui/x-data-grid/internals";
import user from "../../../../../store/user";

const ProfileDataPage = () => {

    const [newPassword, setNewPassword] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setLastName(user.currentUser.surname);
        setFirstName(user.currentUser.name);
        setPatronymic(user.currentUser.patronymic);
        setEmail(user.currentUser.login);
        setPhone(user.currentUser.phone);

    }, [])

    const handleUpdateProfile = async () => {
        if (newPassword) {
            console.log(await UserService.changePassword(newPassword));
            setNewPassword('')
        }

        if (email && email !== user.currentUser.login) {
            console.log(await UserService.changeLogin(email));
        }

        if (lastName && firstName && patronymic) {
            console.log(await UserService.changeName(firstName, lastName, patronymic))
        }

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

    return (
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

           {/* <TextField
                sx={{width: '100%'}}
                placeholder={'Телефон'}
                value={phone}
                onChange={handlePhone}
            />*/}
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
                onClick={handleUpdateProfile}
                variant={'contained'}
                sx={{
                    color: 'white'
                }}
            >
                Сохранить изменения
            </RegularButton>
        </Box>
    );
};

export default ProfileDataPage;