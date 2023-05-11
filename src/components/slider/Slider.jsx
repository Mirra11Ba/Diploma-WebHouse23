import React from "react";
import ImgLuchshieDomaUNas from "../../media/images/slider/luchshie-doma-u-nas.webp";
import ImgProektyChastnykhDomov from "../../media/images/slider/proekty-chastnykh-domov.webp";
import ImgInvesticziiVNedvizhimost from "../../media/images/slider/investiczii-v-nedvizhimost.webp";
import {Carousel} from "react-responsive-carousel";

export default function Slider() {
    return (
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
    );
};

