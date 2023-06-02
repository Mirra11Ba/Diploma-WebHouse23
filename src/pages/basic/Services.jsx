import React from 'react';
import WrapperMainContent from "../../components/layout/wrappers/Wrapper-main-content";
import Trip from "../../components/trip/Trip";
import Box from "@mui/material/Box";
import ImgDistSdelki from "../../media/images/services/distanczionnye-sdelki.webp";
import ImgObzorKrasnodara from "../../media/images/services/obzor-krasnodara.webp";
import ImgObzorKvartiri from "../../media/images/services/obzory-na-kvartiry-i-doma.webp";
import ImgOnlinePodbor from "../../media/images/services/onlajn-podbor-nedvizhimosti.webp";
import ImgPodborIpoteki from "../../media/images/services/podbor-ipoteki.webp";
import ImgRemont from "../../media/images/services/remont-pod-klyuch.webp";
import classes from "../../components/Faq/Faq.module.css";


const Services = () => {
    return (
        <WrapperMainContent>
            {/*1*/}
            <Box>
                <h3 style={{marginBottom: "30px", marginTop: "30px"}}>Дистанционные сделки</h3>
                <img src={ImgDistSdelki} alt="Дистанционные сделки" style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "var(--bord-radius-cust)",
                    objectFit: "contain",
                }}/>
                <h4 style={{
                    paddingBottom: "24px",
                    paddingTop: "30px",
                }}>Этапы сделки на расстоянии:</h4>
                <ul className={`${classes.numberedList} mon-body-18-reg`}>
                    <li><span className={classes.circle}>1</span>Обращение – звоните или пишите Тел / WhatsApp /
                        Telegram +7(918)250-55-88.
                    </li>
                    <li><span className={classes.circle}>2</span>Консультация – обсуждение вопроса со специалистом.</li>
                    <li><span className={classes.circle}>3</span>Видеопоказ недвижимости – чтобы увидеть КП или ЖК вам
                        не придется прилетать в Краснодар. Отправим вам фото и видео в любой мессенджер.
                    </li>
                    <li><span className={classes.circle}>4</span>Принятие решения – выбор земельного участка, выбор дома
                        или квартиры.
                    </li>
                    <li><span className={classes.circle}>5</span>Подписание договора, оплата счета.</li>
                    <li><span className={classes.circle}>6</span>Контакт с юридическим отделом – оформление доверенности
                        на специалиста юридического отдела для представительства интересов покупателя в МФЦ.
                    </li>
                    <li><span className={classes.circle}>7</span>Подписание договора, оплата счета.</li>
                    <li><span className={classes.circle}>8</span>Договор купли-продажи – регистрация в МФЦ за 10 рабочих
                        дней. Оригинал можно получить двумя способами: забрать в МФЦ или получить по почте.
                    </li>
                    <li><span className={classes.circle}>9</span>Связь по менеджеру – на протяжении всего строительства
                        дома.
                    </li>
                    <li><span className={classes.circle}>10</span>Сдача дома – так же по доверенности, на покупателя как
                        на первого собственника.
                    </li>
                    <li><span className={classes.circle}>5</span>Готовый дом с предчистовой отделкой – предоставляем
                        услугу ремонт под ключ.
                    </li>
                </ul>
            </Box>

            {/*2*/}
            <Box>
                <h3 style={{marginBottom: "30px", marginTop: "30px"}}>Дистанционные сделки</h3>
                <img src={ImgPodborIpoteki} alt="Подбор ипотеки" style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "var(--bord-radius-cust)",
                    objectFit: "contain",
                }}/>
                <h4 style={{
                    paddingBottom: "15px",
                    paddingTop: "30px",
                }}>Ипотечные программы</h4>
                <p className={"mon-body-18-reg"}>Поможем в выборе ипотечных программ и банка. Предоставляем сниженные
                    процентные ставки от банков
                    партнеров. Юридическое сопровождение.</p>
            </Box>

            <h3 style={{marginBottom: "30px", marginTop: "80px"}}></h3>
            <Box>
                <h3 style={{marginBottom: "30px", marginTop: "30px"}}>Ремонт под ключ</h3>
                <img src={ImgPodborIpoteki} alt="Подбор ипотеки" style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "var(--bord-radius-cust)",
                    objectFit: "contain",
                }}/>
                <h4 style={{
                    paddingBottom: "15px",
                    paddingTop: "30px",
                }}>Дом, квартира или офис</h4>
                <p className={"mon-body-18-reg"}>Вы можете заказать ремонт под ключ дома, квартиры или офиса. Оплата за
                    ремонт объекта поэтапная. Вы платите, только после проделанной работы.
                    Этапы работы с нашей отделочной бригадой:</p>

            </Box>

            <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Обзоры на квартиры и дома</h3>


            <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Онлайн подбор недвижимости</h3>

            <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Обзор Краснодара</h3>


            <Trip/>
        </WrapperMainContent>
    );
};

export default Services;