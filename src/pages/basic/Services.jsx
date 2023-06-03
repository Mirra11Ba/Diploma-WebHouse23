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
import ImgLogo from "../../media/images/logo/house-23-logo.png";


const Services = () => {
    return (
        <WrapperMainContent>
            {/*1*/}
            <Box>
                <h3 style={{marginBottom: "30px", marginTop: "30px"}}>Дистанционные сделки</h3>
                <Box sx={{
                    height: {
                        xs: "none",
                        lg: "550px",
                    },
                    width: "100%",
                }}>
                    <img src={ImgDistSdelki} alt="Дистанционные сделки" style={{
                        width: "100%",
                        height: "inherit",
                        borderRadius: "var(--bord-radius-cust)",
                        objectFit: "cover",
                    }}/>
                </Box>
                <h4 style={{
                    paddingBottom: "24px",
                    paddingTop: "30px",
                    textAlign: "left",
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
                </ul>
            </Box>

            {/*2*/}
            <Box>
                <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Дистанционные сделки</h3>
                <Box sx={{
                    height: {
                        xs: "none",
                        lg: "550px",
                    },
                    width: "100%",
                }}>
                    <img src={ImgPodborIpoteki} alt="Подбор ипотеки" style={{
                        width: "100%",
                        height: "inherit",
                        borderRadius: "var(--bord-radius-cust)",
                        objectFit: "cover",
                    }}/>
                </Box>
                <h4 style={{
                    paddingBottom: "15px",
                    paddingTop: "30px",
                    textAlign: "left",
                }}>Ипотечные программы</h4>
                <p className={"mon-body-18-reg"}>Поможем в выборе ипотечных программ и банка. Предоставляем сниженные
                    процентные ставки от банков
                    партнеров. Юридическое сопровождение.</p>
            </Box>

            {/*3*/}
            <Box>
                <h3 style={{marginBottom: "30px", marginTop: "30px"}}>Ремонт под ключ</h3>
                <Box sx={{
                    height: {
                        xs: "none",
                        lg: "550px",
                    },
                    width: "100%",
                }}>
                    <img src={ImgRemont} alt="Подбор ипотеки" style={{
                        width: "100%",
                        height: "inherit",
                        borderRadius: "var(--bord-radius-cust)",
                        objectFit: "cover",

                    }}/>
                </Box>
                <h4 style={{
                    paddingBottom: "15px",
                    paddingTop: "30px",
                    textAlign: "left",
                }}>Дом, квартира или офис</h4>
                <p className={"mon-body-18-reg"} style={{paddingBottom: "15px"}}>Вы можете заказать ремонт под ключ
                    дома, квартиры или офиса. Оплата за
                    ремонт объекта поэтапная. Вы платите, только после проделанной работы.
                    Этапы работы с нашей отделочной бригадой:
                </p>
                <ul className={`${classes.numberedList} mon-body-18-reg`}>
                    <li><span className={classes.circle}>1</span>Вы приглашаете мастера на объект, где производится
                        ремонт (квартира/дом/офис).
                    </li>

                    <li><span className={classes.circle}>2</span>Рассказываете о своих желаниях, планах или для работы
                        даёте дизайн проект.
                    </li>

                    <li><span className={classes.circle}>3</span>Мастер считает смету.
                    </li>

                    <li><span className={classes.circle}>4</span>Вас все устраивает, вы соглашаетесь с ценой.
                    </li>

                    <li><span className={classes.circle}>5</span>Покупка отделочных материалов:</li>

                    <ul>
                        <li style={{marginLeft: "50px"}}>сами ищите, подбираете, приобретаете</li>
                        <li style={{marginLeft: "50px"}}>с нашим мастером и скидочными бонусами в строительных
                            магазинах
                        </li>
                    </ul>

                    <li><span className={classes.circle}>6</span> Приступаем к ремонту.</li>

                    <li><span className={classes.circle}>7</span>Далее, на различных этапах отделки вы получаете
                        видеоотчет (онлайн стрим или запись). Через мессенджер, который вы выбрали.
                    </li>
                </ul>
            </Box>

            {/*4*/}
            <Box>
                <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Обзоры на квартиры и дома</h3>
                <Box sx={{
                    height: {
                        xs: "none",
                        lg: "550px",
                    },
                    width: "100%",
                }}>
                    <img src={ImgObzorKvartiri} alt="Подбор ипотеки" style={{
                        width: "100%",
                        height: "inherit",
                        borderRadius: "var(--bord-radius-cust)",
                        objectFit: "cover",
                    }}/>
                </Box>
                <h4 style={{
                    paddingBottom: "15px",
                    paddingTop: "30px",
                    textAlign: "left",
                }}>Снимаем фото и видео о недвижимости</h4>
                <p className={"mon-body-18-reg"} style={{paddingBottom: "10px"}}>Если вы иногородний и у вас нет
                    возможности приехать лично в Краснодар,
                    мы поможем вам с выбором локации, компании, покупки дома.
                </p>
                <p className={"mon-body-18-reg"}>Предоставляем видео и фотоотчеты. Общаемся через любой удобный для вас
                    мессенджер.
                </p>
            </Box>

            {/*5*/}
            <Box>
                <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Онлайн подбор недвижимости</h3>
                <Box sx={{
                    height: {
                        xs: "none",
                        lg: "550px",
                    },
                    width: "100%",
                }}>
                    <img src={ImgOnlinePodbor} alt="Подбор ипотеки" style={{
                        width: "100%",
                        height: "inherit",
                        borderRadius: "var(--bord-radius-cust)",
                        objectFit: "cover",
                    }}/>
                </Box>
                <h4 style={{
                    paddingBottom: "15px",
                    paddingTop: "30px",
                    textAlign: "left",
                }}>Выбери под свой вкус</h4>
                <p className={"mon-body-18-reg"} style={{paddingBottom: "10px"}}>Используйте фильтры и сортировку в
                    каталоге домов для расширеного
                    поиска.
                    Подбор недвижимости от застройщика, без процентов и комиссий, не выходя на строительные
                    площадки.
                </p>
                <p className={"mon-body-18-reg"}>Устраиваем показы строек в Краснодаре, чтобы записаться
                    позвоните/напишите +7(918) 250-55-88.</p>
            </Box>

            {/*6*/}
            <Box sx={{paddingBottom: "80px"}}>
                <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Обзор Краснодара</h3>
                <Box sx={{
                    height: {
                        xs: "none",
                        lg: "550px",
                    },
                    width: "100%",
                }}>
                    <img src={ImgObzorKrasnodara} alt="Подбор ипотеки" style={{
                        width: "100%",
                        height: "inherit",
                        borderRadius: "var(--bord-radius-cust)",
                        objectFit: "cover",
                    }}/>
                </Box>
                <h4 style={{
                    paddingBottom: "15px",
                    paddingTop: "30px",
                    textAlign: "left",
                }}>Видео о жизни в городе на юге России</h4>
                <p className={"mon-body-18-reg"}>Снимаем видеоролики, пишем статьи про Краснодар. Рассказываем про
                    достопримечательности города и края, инфраструктуру районов, университеты и школы, парки и ТЦ.</p>
            </Box>
            <Trip/>

        </WrapperMainContent>
    );
};

export default Services;