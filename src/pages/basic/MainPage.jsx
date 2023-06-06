import React, {useContext} from "react";
import WrapperMainContent from "../../components/layout/wrappers/Wrapper-main-content";
import AdvantageList from "../../components/advantage/AdvantageList";
import PaymentMethodList from "../../components/paymentMethod/PaymentMethodList";
import NewsList from "../../components/news/NewsList";
import Slider from "../../components/slider/Slider";
import Trip from "../../components/trip/Trip";
import HouseCardList from "../../components/houseCard/HouseCardList";
import {observer} from "mobx-react-lite";
import house from "../../store/house";
import CallBackFormDialog from "../../components/UserDialogs/CallBackFormDialog/CallBackFormDialog";
import BookingFormDialog from "../../components/UserDialogs/BookingFormDialog/BookingFormDialog";
import {BookingModalContext, HouseContext} from "../../context";


const MainPage = observer(() => {

    const {bookingOpen, setBookingOpen} = useContext(BookingModalContext);
    const {selectedHouseId, setSelectedHouseId} = useContext(HouseContext);

    return(
        <>
            <Slider/>

            <WrapperMainContent>
                {/*Блок преимущества*/}
                <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Преимущества</h3>
                <AdvantageList/>

                {/*Блок каталог домов*/}
                <h3 style={{paddingBottom: "30px", paddingTop: "80px"}}>Наши дома</h3>
                {/*<HouseCardItem/>*/}
                <HouseCardList houses={house.houses}/>

                {/*Блок способы оплаты*/}
                <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Способы оплаты</h3>
                <PaymentMethodList/>

                {/*Блок Новости*/}
                <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Новости</h3>
                <NewsList/>

                {/*Блок запись на экскурсию*/}
                <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Записаться на экскурсию бесплатно</h3>
                <Trip />
                <CallBackFormDialog/>

            </WrapperMainContent>
        </>
    );
});

export default MainPage;
