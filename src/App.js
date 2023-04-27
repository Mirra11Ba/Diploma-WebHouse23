import "./style/index.css";
import React, {useState} from "react";
import WrapperFullWidth from "./components/layout/wrappers/Wrapper-full-width";
import WrapperMainContent from "./components/layout/wrappers/Wrapper-main-content";
import ImgCyberpunk from "./media/images/cb2077.png";
import ImgInvesticziiVNedvizhimost from "./media/images/investiczii-v-nedvizhimost.webp";
import ImgLuchshieDomaUNas from "./media/images/luchshie-doma-u-nas.webp";
import ImgProektyChastnykhDomov from "./media/images/proekty-chastnykh-domov.webp";
import Button from '@mui/material/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import AdvantageList from "./components/advantage/AdvantageList";
import Grid2 from "@mui/material/Unstable_Grid2";
import CssIndex from "./style/index.css";
import PaymentMethodItem from "./components/paymentMethod/PaymentMethodItem";
import NewsItem from "./components/news/NewsItem";
import NewsList from "./components/news/NewsList";




function App() {
    return (
        <div className="App">
            <WrapperFullWidth>
                {/*Header*/}
                <h1>Header</h1>
                {/*<img style={{width: "100%", height: "auto"}} src={ImgLuchshieDomaUNas} alt={"киберпанк"}/>*/}

                {/*<div style={{height: "600px;", width: "100%"}}>*/}
                {/*    <img style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: 'center'}} src={ImgLuchshieDomaUNas} alt={"киберпанк"}/>*/}
                {/*</div>*/}

                {/*<div style={{height: "600px;", width: "100%"}}>*/}
                {/*    <img style={{width: "100%", height: "80hv", objectFit: "cover", objectPosition: 'center'}} src={ImgLuchshieDomaUNas} alt={"киберпанк"}/>*/}
                {/*</div>*/}



                {/*Slider*/}
                    <Carousel
                        showStatus={false}
                        showThumbs={false}
                        emulateTouch={true}
                        swipeable={true}
                        infiniteLoop={true}
                        interval={3100}
                        transitionTime={800}
                        useKeyboardArrows={true}
                        autoPlay={true}
                        stopOnHover={true}>

                        <div>
                            <img src={ImgLuchshieDomaUNas} alt="Частный дом"/>
                            <p className={"legend"}>Лучшие дома только у
                                нас!</p>
                        </div>
                        <div>
                            <img src={ImgProektyChastnykhDomov} alt="Дом с землей"/>
                            <p className="legend">Проекты домов</p>
                        </div>
                        <div>
                            <img src={ImgInvesticziiVNedvizhimost} alt="Инвестии в недвижимость"/>
                            <p className="legend">Инвестируй в недвижимость, а не в крипту</p>
                        </div>
                    </Carousel>


                {/*Блок преимущества*/}
                <WrapperMainContent>
                    <h3 style={{marginBottom: "30px"}}>Преимущества</h3>
                    <AdvantageList/>
                </WrapperMainContent>


                {/*Блок каталог домов*/}
                <WrapperFullWidth>
                    <div className={"backColNeptuneBlue25"} style={{width: "100%", height: "700px"}}>
                        <h3 style={{paddingBottom: "30px", paddingTop: "30px"}}>Наши дома</h3>
                        <WrapperMainContent>
                            <h3>список домов</h3>
                        </WrapperMainContent>
                    </div>
                </WrapperFullWidth>


                {/*Блок способы оплаты*/}
                <WrapperMainContent>
                    <h3 style={{marginBottom: "30px"}}>Способы оплаты</h3>
                    <PaymentMethodItem/>
                </WrapperMainContent>


                {/*Блок Новости*/}
                <WrapperMainContent>
                    <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Новости</h3>
                    <NewsList/>
                </WrapperMainContent>


                {/*Блок запись на экскурсию*/}
                {/*Блок обзоры*/}
                {/*Footer*/}

            </WrapperFullWidth>
        </div>
    );
}

export default App;