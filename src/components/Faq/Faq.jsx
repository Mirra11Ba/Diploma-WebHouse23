import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";


export default function Faq() {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box>
            {/*1*/}
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <h4 sx={{width: '33%', flexShrink: 0}}>
                        Как купить дом дистанционно в Краснодаре?
                    </h4>
                    {/*<Typography sx={{color: 'text.secondary'}}>I am an accordion</Typography>*/}
                </AccordionSummary>
                <AccordionDetails>
                    <Box className={"mon-body-20-reg"}>
                        {/*<List>*/}
                        {/*    <ListItem>1. Мы предлагаем возможность дистанционных сделок</ListItem>*/}
                        {/*    <ListItem>1. Мы предлагаем возможность дистанционных сделок</ListItem>*/}
                        {/*</List>*/}
                        <ul>
                            <li>Мы предлагаем возможность дистанционных сделок.</li>
                            <li>Вы можете просмотреть фотографии, видеообзоры, планы домов и получить детальную информацию о каждом объекте недвижимости на нашем сайте.</li>
                            <li>Кроме того, мы проводим виртуальные просмотры</li>
                            <li>Отвечаем на ваши вопросы и организовываем онлайн-подписание документов для вашего удобства.</li>
                        </ul>
                    </Box>
                </AccordionDetails>
            </Accordion>

            {/*2*/}
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <h4 sx={{width: '33%', flexShrink: 0}}>
                        Как проходит сделка покупки дома онлайн?
                    </h4>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className={"mon-body-20-reg"}>
                        <ul>
                            <li>Обращение - звоните или пишите Тел / WhatsApp / Telegram +79182505588</li>
                            <li>Консультация.</li>
                            <li>Видеопоказ - чтобы увидеть коттеджный поселок и дома, вам не придется прилетать в Краснодар, вы сможете его рассмотреть со всех сторон онлайн. В любом мессенджере, какой вам удобен</li>
                            <li>Принятие решения - выбор земельного участка, выбор дома.</li>
                            <li>Подписание договора, оплата счета.</li>
                            <li>Контакт с юридическим отделом - оформление доверенности на специалиста юридического отдела для представительства интересов покупателя в МФЦ.</li>
                            <li>Договор купли-продажи - регистрация в МФЦ 10 рабочих дней. Оригинал можно получить двумя способами забрать в МФЦ или получить по почте.</li>
                            <li>Связь с менеджером - на протяжении всего строительства дома.</li>
                            <li>Сдача дома - так же по доверенности, на покупателя как на первого собственника.</li>
                            <li>Готовый дом с предчистовой отделкой - предоставляем услугу ремонт под ключ.</li>
                        </ul>
                    </Box>
                </AccordionDetails>
            </Accordion>

            {/*3*/}
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <h4 sx={{width: '33%', flexShrink: 0}}>
                        Advanced settings
                    </h4>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className={"mon-body-20-reg"}>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Box>
                </AccordionDetails>
            </Accordion>

            {/*4*/}
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <h4 sx={{width: '33%', flexShrink: 0}}>Personal data</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className={"mon-body-20-reg"}>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Box>
                </AccordionDetails>
            </Accordion>

            {/*5*/}
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <h4 sx={{width: '33%', flexShrink: 0}}>Personal data</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className={"mon-body-20-reg"}>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};