import React, {useState} from "react";
import {Button, Snackbar, TextField} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Box from "@mui/material/Box";
import {PhoneFab} from "../../styled/buttons/PhoneFab";
import {SmallButton} from "../../styled/buttons/SmallButton";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {API_URL} from "../../../api/http";

const CallBackFormDialog = ({onSubmit}) => {
    const [openForm, setOpenForm] = useState(false);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});

    const openFormDialog = () => {
        setOpenForm(true);
    };
    const closeFormDialog = () => {
        setOpenForm(false);
    };
    const handlePhoneChange = (event) => {
        const formattedPhone = formatPhone(event.target.value);
        setPhone(formattedPhone);
    };
    const formatPhone = (value) => {
        const phone = value.replace(/[^\d]/g, ''); // Оставляем только цифры
        const phoneLength = phone.length;

        if (phoneLength <= 3) {
            return phone;
        } else if (phoneLength <= 6) {
            return `+7 (${phone.slice(1, 4)}) ${phone.slice(4)}`;
        } else if (phoneLength <= 8) {
            return `+7 (${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(7)}`;
        } else {
            return `+7 (${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(7, 9)}-${phone.slice(9, 11)}`;
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const validateForm = () => {
        const errors = {};

        if (!/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone)) {
            errors.phoneNumber = 'Введите корректный номер в формате +79997778811, отображаться будет +7 (999) 999-99-99';
        }

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            errors.email = 'Введите корректный адрес электронной почты';
        }

        return errors;
    };

    // Snackbar
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const handleClickSnack = () => {
        setOpenSnackbar(true);
    };
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };
    const action = (<React.Fragment>
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseSnackbar}
        >
            <CloseIcon fontSize="small"/>
        </IconButton>
    </React.Fragment>);

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {
            // Данные формы прошли валидацию
            fetch(`${API_URL}/back_calls`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({phone, email, name})
            }).then(response => {
                console.log(response)
            })
            console.log('Данные формы отправлены');
            handleClickSnack();
            closeFormDialog();
        } else {
            setErrors(validationErrors);
        }
    };


    return (<Box>
        <PhoneFab
            onClick={openFormDialog}
            aria-label="Обратный звонок"
            sx={{
                position: 'fixed', zIndex: '1000', left: {
                    xs: "none", lg: "93%",
                }, top: {
                    xs: "none", lg: "85%",
                },
            }}>
            >
            <PhoneInTalkIcon
                sx={{
                    position: 'absolute', fontSize: '40px', color: 'white',
                }}
            >
            </PhoneInTalkIcon>
        </PhoneFab>

        <Dialog open={openForm} onClose={closeFormDialog}>
            <DialogTitle>
                <h4>Заявка на обратный звонок</h4>
            </DialogTitle>
            <DialogContent>
                <Box sx={{
                    display: 'flex', flexDirection: 'column', gap: 2
                }}
                >
                    <TextField
                        sx={{
                            width: '100%', marginTop: '5px',
                        }}
                        placeholder={'79185557788'}
                        label="Телефон*"
                        value={phone}
                        onChange={handlePhoneChange}
                        error={!!errors.phone}
                        helperText={errors.phone}
                    />
                    <TextField
                        sx={{width: '100%'}}
                        placeholder={'you@ya.ru'}
                        label="Почта*"
                        value={email}
                        onChange={handleEmailChange}
                        error={!!errors.email}
                        helperText={errors.email}
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

        <Snackbar
            open={openSnackbar}
            autoHideDuration={4000}
            onClose={handleCloseSnackbar}
            message="Форма успешна отправлена"
            action={action}
        />
    </Box>);
};

export default CallBackFormDialog;

