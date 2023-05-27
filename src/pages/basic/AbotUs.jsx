import React from 'react';
import WrapperMainContent from "../../components/layout/wrappers/Wrapper-main-content";
import AdvantageList from "../../components/advantage/AdvantageList";
import Trip from "../../components/trip/Trip";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Faq from "../../components/Faq/Faq";

const AbotUs = () => {
    return (
        <WrapperMainContent>



            <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Почему нас выбирают</h3>

            <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Преимущества</h3>
            <AdvantageList/>

            <h3 style={{marginBottom: "30px", marginTop: "80px"}}>FAQ</h3>
            <Faq/>

            <h3 style={{marginBottom: "30px", marginTop: "80px"}}>Преимущества</h3>
            <Trip/>
        </WrapperMainContent>
    );
};

export default AbotUs;