import React, {useEffect, useState} from "react";
import {Carousel} from "react-responsive-carousel";
import ImgLuchshieDomaUNas from "../../media/images/slider/luchshie-doma-u-nas.webp";
import ImgProektyChastnykhDomov from "../../media/images/slider/proekty-chastnykh-domov.webp";
import ImgInvesticziiVNedvizhimost from "../../media/images/slider/investiczii-v-nedvizhimost.webp";
import WrapperMainContent from "../../components/layout/wrappers/Wrapper-main-content";
import AdvantageList from "../../components/advantage/AdvantageList";
import WrapperFullWidth from "../../components/layout/wrappers/Wrapper-full-width";
import PaymentMethodList from "../../components/paymentMethod/PaymentMethodList";
import NewsList from "../../components/news/NewsList";
import Header from "../../components/layout/header/Header";
import Slider from "../../components/slider/Slider";
import Trip from "../../components/trip/Trip";
import Footer from "../../components/layout/footer/Footer";
import HouseCardItem from "../../components/houseCard/HouseCardItem";
import HouseCardList from "../../components/houseCard/HouseCardList";
import {observer} from "mobx-react-lite";
import house from "../../store/house";



const MainPage = observer(() => {

    const [houses, setHouses] = useState([])

    useEffect(() => {
        setHouses(house.houses)
    }, [])

    useEffect(() => {
        setHouses(house.houses)
    }, [JSON.stringify(house.houses)])

    return(
        <>
            {/*<Header/>*/}

            {/*<img style={{width: "100%", height: "auto"}} src={ImgLuchshieDomaUNas} alt={"киберпанк"}/>*/}

            {/*<div style={{height: "600px;", width: "100%"}}>*/}
            {/*    <img style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: 'center'}} src={ImgLuchshieDomaUNas} alt={"киберпанк"}/>*/}
            {/*</div>*/}

            {/*<div style={{height: "600px;", width: "100%"}}>*/}
            {/*    <img style={{width: "100%", height: "80hv", objectFit: "cover", objectPosition: 'center'}} src={ImgLuchshieDomaUNas} alt={"киберпанк"}/>*/}
            {/*</div>*/}

            <Slider/>


            {/*Блок преимущества*/}
            <WrapperMainContent>
                <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Преимущества</h3>
                <AdvantageList/>
            </WrapperMainContent>


            {/*Блок каталог домов*/}
            <WrapperMainContent>
                <h3 style={{paddingBottom: "30px", paddingTop: "30px"}}>Наши дома</h3>
                {/*<HouseCardItem/>*/}
                <HouseCardList houses={houses}/>



            </WrapperMainContent>


            <WrapperMainContent>
                {/*Блок способы оплаты*/}
                <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Способы оплаты</h3>
                <PaymentMethodList/>

                {/*Блок Новости*/}
                <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Новости</h3>
                <NewsList/>

                {/*Блок запись на экскурсию*/}
                <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Записаться на экскурсию бесплатно</h3>
                <Trip/>

                {/*Блок обзоры*/}

                <h1>efe</h1>
            </WrapperMainContent>


            {/*Footer*/}
           {/* <Footer/>*/}


        </>
    );
});

export default MainPage;
