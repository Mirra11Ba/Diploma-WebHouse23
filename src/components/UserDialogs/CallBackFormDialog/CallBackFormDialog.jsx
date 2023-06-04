import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Box from "@mui/material/Box";
import {PhoneFab} from "../../styled/buttons/PhoneFab";
import {SmallButton} from "../../styled/buttons/SmallButton";
import MaskedInput from 'react-text-mask';
// import MaskedInput from 'react-input-mask';

const CallBackFormDialog = () => {
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

    const handlePhoneNumberChange = (event) => {
        let value = event.target.value;

        // Удаление всех нецифровых символов из введенного значения
        value = value.replace(/\D/g, '');

        // Ограничение на количество цифр
        value = value.slice(0, 11);

        // Добавление префикса "+7"
        if (value.length >= 1 && value[0] !== '7') {
            value = '7' + value;
        }

        setPhone(value);
        // setPhone(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const validateForm = () => {
        const errors = {};

        if (!/^\+7\d{10}$/.test(phone.replace(/\D/g, ''))) {
            errors.phoneNumber = 'Введите корректный российский номер телефона';
        }

        // if (!/^\+7\d{10}$/.test(phone)) {
        //     errors.phoneNumber = 'Введите корректный российский номер телефона';
        // }

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            errors.email = 'Введите корректный адрес электронной почты';
        }

        return errors;
    };
    const phoneMask = [
        '+',
        '7',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {
            // Данные формы прошли валидацию
            console.log('Данные формы отправлены');
            closeFormDialog();
        } else {
            setErrors(validationErrors);
        }
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
                <DialogContent>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2
                    }}
                    >
                        <MaskedInput
                            mask={phoneMask}
                            guide={false}
                            value={phone}
                            onChange={handlePhoneNumberChange}
                            render={(ref, props) => (
                                <TextField
                                    {...props}
                                    inputRef={ref}
                                    sx={{
                                        width: '100%',
                                        marginTop: '5px',
                                    }}
                                    placeholder={'+79185557788'}
                                    label="Телефон*"
                                    value={phone}
                                    onChange={handlePhoneNumberChange}
                                    error={!!errors.phone}
                                    helperText={errors.phone}
                                />
                            )}
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
        </Box>
    );
};

export default CallBackFormDialog;

