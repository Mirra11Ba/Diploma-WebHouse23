import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import classes from "../../news/News.module.css";
import ImgWhiteLogo from "../../../media/images/house-23-logo-white.png";

export default function Footer() {
    return (
        // Гланый big grid - columns
        <Grid2 container sx={{
            gap: {
                sm: "10px",
                md: "15px",
            },
            background: "#1B1C37",
        }}>
            {/* Второстепенный grid - individual rows (card)*/}

            <Grid2 item xs={4}>
                <img src={ImgWhiteLogo}/>
            </Grid2>

            <Grid2 item xs={2}>

            </Grid2>

            <Grid2 item xs={2}>

            </Grid2>


            <Grid2 item xs={2}>

            </Grid2>

            <Grid2 item xs={4}>

            </Grid2>

        </Grid2>

    );
};
