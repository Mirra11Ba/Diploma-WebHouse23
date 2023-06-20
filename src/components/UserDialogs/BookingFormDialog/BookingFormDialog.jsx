import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import { ru } from 'date-fns/locale';
import { ruRU } from '@mui/x-date-pickers/locales';
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import {format} from "date-fns";
import 'dayjs/locale/ru'
import { parseISO } from 'date-fns'
import {logDOM} from "@testing-library/react";
import BookingService from "../../../api/services/BookingService";
import {Alert, Snackbar} from "@mui/material";

const BookingFormDialog = ({open, setOpen, houseId}) => {
    //const [open, setOpen] = useState(false);
    const defaultTime = (format(parseISO(new Date().toISOString()), 'dd-MM.yyyy'))
    console.log(houseId)
    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    const [selectedDate, setSelectedDate] = useState(dayjs('06-06-2023'));
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Ваша логика обработки выбранной даты и времени
        handleClose();
    };

    const handleCreateBooking = async () => {
        console.log(selectedDate.unix())

        console.log(await BookingService.createBooking(selectedDate.unix(), houseId ))

        setOpen(false);
        setOpenSnackbar(true)
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="booking-modal-title"
                aria-describedby="booking-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        minWidth: 300,
                        display: 'flex',
                        gap: 2,
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <h2 id="booking-modal-title">Выберите дату и время</h2>

                    <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        adapterLocale={ru}
                        localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
                    >

                        <DemoContainer components={['DatePicker']}>
                            <DatePicker
                                sx={{
                                    width: '100%'
                                }}
                                label="Выберите дату"
                                value={selectedDate}
                                onChange={(newValue) => setSelectedDate(newValue)}
                            />

                        </DemoContainer>

                    </LocalizationProvider>

                    <Button
                        variant="contained"
                        color="primary" sx={{ mt: 2, width: '100%' }}
                        onClick={handleCreateBooking}
                    >
                        Забронировать
                    </Button>
                   {/* <form onSubmit={handleSubmit}>
                        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ru}>
                            <DateTimePicker
                                renderInput={(props) => <TextField {...props} />}
                                label="Дата и время"
                                value={selectedDate}
                                onChange={handleDateChange}
                                inputFormat="dd.MM.yyyy HH:mm"
                            />
                        </LocalizationProvider>

                    </form>*/}
                </Box>
            </Modal>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
                message="Эта функция будет доступна в следующей версии"

            >
                <Alert variant={'outlined'}>
                    Бронь успешно создана!
                </Alert>
            </Snackbar>

        </div>
    );
};

export default BookingFormDialog;