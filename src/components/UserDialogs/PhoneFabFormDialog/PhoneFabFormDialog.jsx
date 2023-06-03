import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {PhoneFab} from "../styled/buttons/PhoneFab";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Box from "@mui/material/Box";

const PhoneFabFormDialog = () => {
    const [openForm, setOpenForm] = useState(false);

    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const openFormDialog = () => {
        setOpenForm(true);
    };

    const closeFormDialog = () => {
        setOpenForm(false);
    };

    const handlePhoneNumberChange = (event) => {
        setPhone(event.target.value);
    };
    const handleEmailChange = (event) => {
        setPhone(event.target.value);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Отправлено');
    };

    return (
        <Box>
            <PhoneFab
                onClick={openFormDialog}
                aria-label="Обратный звонок"
                sx={{
                    position: 'fixed',
                    zIndex: '1000',
                    left: '93%',
                    top: '85%',
                }}
            >
                <PhoneInTalkIcon
                    sx={{
                        fontSize: '40px',
                        color: 'white',
                    }}
                >
                </PhoneInTalkIcon>
            </PhoneFab>

            <Dialog open={openForm} onClose={closeFormDialog}>
                <DialogTitle>
                    Запись на обратный звонок
                    {/*<IconButton edge="end" color="inherit" onClick={closeFormDialog} aria-label="Закрыть">*/}
                    {/*    <CloseIcon />*/}
                    {/*</IconButton>*/}
                </DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Имя"
                            value={name}
                            onChange={handleNameChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Номер телефона"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            fullWidth
                            margin="normal"
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeFormDialog}>Закрыть</Button>
                    <Button type="submit" onClick={handleSubmit} variant="contained">Отправить</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default PhoneFabFormDialog;

