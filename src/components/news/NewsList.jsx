import React from "react";
import PropTypes from "prop-types";
import Grid2 from "@mui/material/Unstable_Grid2";
import classes from "./News.module.css";
import ImgZkElegeant from "../../media/images/zhiloj-kompleks-elegeant.webp";
import ImgZkFontany from "../../media/images/zhk-fontany-krasnodar.webp";
import ImgZkStriji from  "../../media/images/zhk-striji-krasnodar.webp";
import Button from "@mui/material/Button";
import AdvantageItem from "../advantage/AdvantageItem";
import NewsItem from "./NewsItem";

export default function NewsList(props) {
    const newsArr = [
        {
            id: 1,
            pict: ImgZkFontany,
            title: 'Жилой Комплекс Фонтаны',
            text: 'ЖК Фонтаны воплощает оригинальные, креативные решения дизайнеров и архитекторов. Он расположен ' +
                  'в Краснодаре на границе района ЦМР и ЧМР. Масштабно и красиво, завораживающе.',
            btnText: 'Читать далее'
        },
        {
            id: 2,
            pict: ImgZkElegeant,
            title: 'Жилой Комплекс Элегант',
            text: 'ЖК Элегант – три линии домов со стильным фасадом, неоновой подсветкой. Комплекс расположен ' +
                'в самом развитом по инфраструктуре и удобном по транспортной доступности районе Карасунского ' +
                'округа Краснодара – ХБК.',
            btnText: 'Читать далее'
        },
        {
            id: 3,
            pict: ImgZkStriji,
            title: 'Жилой Комплекс Стрижи',
            text: 'ЖК Стрижи – это четыре монолитно-кирпичных 24-этажных дома.\n' +
                'Обзор новостройки в микрорайоне Гидрострой. Расскажем про инфраструктуру в районе. Какие парки, ' +
                'школы, магазины и дороги.\n',
            btnText: 'Читать далее'
        },
    ];
    const list = newsArr.map(news =>
        <NewsItem pict={news.pict} title={news.title} text={news.text} btnText={news.btnText} key={news.id}/>
    )
    return (
        <Grid2 container sx={{
            gap: {
                sm: "35px",
                lg: "19px",
            },
            alignItems: "center",
            justifyContent: "center",
        }}>
            {list}
        </Grid2>
    )
}