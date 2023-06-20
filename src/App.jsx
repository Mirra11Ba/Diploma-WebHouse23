import "./style/index.css";
import React, {useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MainPage from "./pages/basic/MainPage";
import {ThemeProvider} from "@mui/material";
import {house23Theme} from "./style/themes";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import WrapperFullWidth from "./components/layout/wrappers/Wrapper-full-width";
import {Outlet} from 'react-router-dom'
import fetchData from "./hooks/fetchData";
import user from "./store/user";
import {BookingModalContext, HouseContext} from "./context";
import 'dayjs/locale/ru'
import dayjs from "dayjs";
import BookingFormDialog from "./components/UserDialogs/BookingFormDialog/BookingFormDialog";

export const loader = async () => {
    console.log('app loaded')
    await fetchData();
    await user.checkAuth()
    return null
}
function App() {

    const [bookingOpen, setBookingOpen] = useState(false);
    const [selectedHouseId, setSelectedHouseId] = useState(null);
    dayjs.locale('ru')

    return (
        <div className="App">
            <ThemeProvider theme={house23Theme}>
                <BookingModalContext.Provider value={{bookingOpen, setBookingOpen}}>
                    <HouseContext.Provider value={{selectedHouseId, setSelectedHouseId}}>
                        <WrapperFullWidth>
                            <Header/>
                            <Outlet/>
                        </WrapperFullWidth>
                        <Footer/>

                        <BookingFormDialog
                            open={bookingOpen}
                            setOpen={setBookingOpen}
                            houseId={selectedHouseId}
                        />
                    </HouseContext.Provider>
                </BookingModalContext.Provider>
            </ThemeProvider>
        </div>
    );
}
export default App;