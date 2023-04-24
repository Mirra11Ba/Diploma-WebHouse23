import React from "react";
import PropTypes from "prop-types";
import Grid2 from "@mui/material/Unstable_Grid2";
import classes from "./News.module.css";
import ImgZkElegeant from "../../media/images/zhiloj-kompleks-elegeant.webp";
import ImgZkFontany from "../../media/images/zhk-fontany-krasnodar.webp";
import ImgZkStriji from  "../../media/images/zhk-striji-krasnodar.webp";
import Button from "@mui/material/Button";

// export default function AdvantageItem(props) {
//     const {icon, text} = props;
//     return (
//         <div className={classes.card}>
//             <div className={classes.flexItemContainer}>
//                 <img className={classes.icon} src={icon}/>
//                 <div className={`${classes.text} mon-body-18-reg`}>{text}</div>
//             </div>
//         </div>
//     );
// };
//
// AdvantageItem.propTypes = {
//     icon: PropTypes.object,
//     text: PropTypes.string
// }

export default function NewsItem() {
    return (
        <Grid2 container sx={{
            gap: {
                sm: "35px",
                lg: "19px",
            },
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Grid2 container className={classes.card} sx={{
                gap: {
                    sm: "10px",
                    md: "15px",
                }
            }}>
                <Grid2>
                    <img className={classes.img} src={ImgZkFontany}/>
                </Grid2>
                <Grid2>
                    <h4 className={classes.title}>Жилой Комплекс Фонтаны</h4>
                </Grid2>
                <Grid2>
                    <p className={`${classes.text} mon-body-16-reg`}>
                        ЖК Фонтаны воплощает оригинальные, креативные решения дизайнеров и архитекторов.
                        Он расположен в Краснодаре на границе района ЦМР и ЧМР. Масштабно и красиво, завораживающе.
                    </p>
                    <Button variant="outlined">Читать далее</Button>
                </Grid2>
            </Grid2>




            <Grid2 className={classes.card}>
                <img className={classes.img} src={ImgZkFontany}/>
                <h4 className={classes.title}>Жилой Комплекс Фонтаны</h4>
                <p className={`${classes.text} mon-body-16-reg`}>
                    ЖК Фонтаны воплощает оригинальные, креативные решения дизайнеров и архитекторов.
                    Он расположен в Краснодаре на границе района ЦМР и ЧМР. Масштабно и красиво, завораживающе.
                </p>
                <Button variant="outlined">Читать далее</Button>
            </Grid2>

            <Grid2 className={classes.card}>
                <img className={classes.img} src={ImgZkFontany}/>
                <h4 className={classes.title}>Жилой Комплекс Фонтаны</h4>
                <p className={`${classes.text} mon-body-16-reg`}>
                    ЖК Фонтаны воплощает оригинальные, креативные решения дизайнеров и архитекторов.
                    Он расположен в Краснодаре на границе района ЦМР и ЧМР. Масштабно и красиво, завораживающе.
                </p>
                <Button variant="outlined">Читать далее</Button>
            </Grid2>
        </Grid2>

    );
};