import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { ru } from 'date-fns/locale';

const BookingFormDialog = () => {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

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

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Бронь
            </Button>
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
                    }}
                >
                    <h2 id="booking-modal-title">Выберите дату и время</h2>
                    <form onSubmit={handleSubmit}>
                        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ru}>
                            <DateTimePicker
                                renderInput={(props) => <TextField {...props} />}
                                label="Дата и время"
                                value={selectedDate}
                                onChange={handleDateChange}
                                inputFormat="dd.MM.yyyy HH:mm"
                            />
                        </LocalizationProvider>
                        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                            Забронировать
                        </Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default BookingFormDialog;