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
import {Grid} from "@mui/material";
import AdvantageList from "./components/advantage/AdvantageList";
import Grid2 from "@mui/material/Unstable_Grid2";
import AdvantageItem from "./components/advantage/AdvantageItem";

function App() {
    return (
      <div className="App">
        <WrapperFullWidth>
            {/*Header*/}
            <h1>Header</h1>
            <img style={{width: "100%", height: "auto"}} src={ImgCyberpunk} alt={"киберпанк"}/>

            {/*Slider*/}
            <WrapperMainContent>
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
                    stopOnHover={true}
                >
                    <div>
                        <img src={ImgLuchshieDomaUNas} alt="Частный дом"/>
                        <p className={"legend, slider-label-text, f-des-oswald-font-H2-56-reg" }>Лучшие дома только у нас!</p>
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
                <Grid2>
                    <AdvantageItem/>
                    <AdvantageList/>
                </Grid2>



                {/*Блок Дома*/}




                {/*Блок способы оплаты*/}
                {/*Блок новости*/}
                {/*Блок запись на экскурсию*/}
                {/*Блок обзоры*/}
                {/*Footer*/}
            </WrapperMainContent>
        </WrapperFullWidth>
      </div>
    );
}
export default App;