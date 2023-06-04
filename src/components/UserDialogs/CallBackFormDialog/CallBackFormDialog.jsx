import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Box from "@mui/material/Box";
import {PhoneFab} from "../../styled/buttons/PhoneFab";
import {RegularButton} from "../../styled/buttons/RegularButton";
import {SmallButton} from "../../styled/buttons/SmallButton";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const CallBackFormDialog = () => {
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
        setEmail(event.target.value);
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
                    left: {
                        xs: "none",
                        lg: "93%",
                    },
                    top: {
                        xs: "none",
                        lg: "85%",
                    },
                }}>
            >
                <PhoneInTalkIcon
                    sx={{
                        position: 'absolute',
                        fontSize: '40px',
                        color: 'white',
                    }}
                >
                </PhoneInTalkIcon>
            </PhoneFab>

            <Dialog open={openForm} onClose={closeFormDialog}>
                <DialogTitle>
                    <h4>Заявка на обратный звонок</h4>
                </DialogTitle>
                <DialogContent >
                    <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2
                        }}
                    >
                        <TextField
                            sx={{
                                width: '100%',
                                marginTop: '5px',
                            }}
                            placeholder={'+79185557788'}
                            label="Телефон*"
                            value={phone}
                            onChange={handlePhoneNumberChange}
                        />
                        <TextField
                            sx={{width: '100%'}}
                            placeholder={'you@ya.ru'}
                            label="Почта*"
                            value={email}
                            onChange={handleEmailChange}
                            // fullWidth
                        />
                        <TextField
                            placeholder={'Алекс'}
                            label="Имя"
                            value={name}
                            onChange={handleNameChange}
                            fullWidth
                        />
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 2,
                        paddingTop: '30px',
                        justifyContent: 'space-between',
                    }}>
                        <Button onClick={closeFormDialog} sx={{textTransform: 'none'}}>Закрыть</Button>
                        <SmallButton type="submit" onClick={handleSubmit} variant="contained">Жду звонка</SmallButton>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default CallBackFormDialog;

