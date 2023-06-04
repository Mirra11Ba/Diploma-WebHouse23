import React from 'react';
import WrapperMainContent from "../../components/layout/wrappers/Wrapper-main-content";
import AdvantageList from "../../components/advantage/AdvantageList";
import Trip from "../../components/trip/Trip";
import Faq from "../../components/Faq/Faq";
import classes from "../../components/Faq/Faq.module.css";
import ImgSkyScraper from "../../media/images/about/vysotnye-domaa.webp";
import Box from "@mui/material/Box";
import CallBackFormDialog from "../../components/UserDialogs/CallBackFormDialog/CallBackFormDialog";

const AbotUs = () => {
    return (
            <WrapperMainContent>
                <h3 style={{marginBottom: "30px", marginTop: "30px"}}>Контакты в подвале</h3>
            </WrapperMainContent>
    );
};

export default AbotUs;