import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import {styled, TextField} from "@mui/material";
import classes from "./Faq.module.css";


export default function Faq() {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    // const FaqAccordion = styled((props) => (
    //     <Accordion disableGutters elevation={0} square {...props} />
    // ))(({ theme }) => ({
    //     border: `1px solid var(--dark-space-50)`,
    //     // '&:not(:last-child)': {
    //     //     borderBottom: 0,
    //     // },
    //     // '&:before': {
    //     //     display: 'none',
    //     // },
    // }));
    // const FaqAccordionSummary = styled((props) => (
    //     <AccordionSummary
    //
    //         {...props}
    //     />
    // ))(({ theme }) => ({
    //     backgroundColor:
    //         theme.palette.mode === 'dark'
    //             ? 'rgba(255, 255, 255, .05)'
    //             : 'rgba(0, 0, 0, .03)',
    //     flexDirection: 'row-reverse',
    //     '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    //         transform: 'rotate(90deg)',
    //     },
    //     '& .MuiAccordionSummary-content': {
    //         marginLeft: theme.spacing(1),
    //     },
    // }));



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
                        Какие виды ремонта вы предлагаете?
                    </h4>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className={"mon-body-20-reg"}>
                        <ul>
                            <li>Предчистовая отделка</li>
                            <li>Мы сотрудничаем с надежными подрядчиками и предлагаем услуги ремонта под ключ.</li>
                            <li>Мы можем помочь вам создать дизайн-проект, выбрать материалы, организовать ремонтные работы и обеспечить качественное выполнение проекта.</li>
                            <li>Ремонт под ключ позволяет вам получить готовый к проживанию дом без лишних хлопот.</li>
                        </ul>
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
                    <h4 sx={{width: '33%', flexShrink: 0}}>
                        Можете ли вы помочь мне с получением ипотеки для покупки дома?
                    </h4>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className={"mon-body-20-reg"}>
                        <ul>
                            <li>Да, мы сотрудничаем с различными банками и кредитными мы сотрудничаем с различными банками и готовы помочь вам с получением ипотеки. </li>
                            <li>Наши специалисты по ипотечному кредитованию будут работать с вами, чтобы найти наилучшие варианты ипотечных программ, которые соответствуют вашим потребностям и возможностям. </li>
                            <li>Они проведут с вами консультацию, помогут оформить необходимые документы и сопроводят вас на всех этапах процесса получения ипотеки.</li>
                        </ul>
                    </Box>
                </AccordionDetails>
            </Accordion>

            {/*5*/}
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                >
                    <h4 sx={{width: '33%', flexShrink: 0}}>
                        Какие дополнительные услуги вы предоставляете при покупке дома?
                    </h4>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className={"mon-body-20-reg"}>
                        <ul>
                            <li>Поиск и покупка дома</li>
                            <li>Онлайн осмотр объекта, консультация</li>
                            <li>Оценка недвижимости</li>
                            <li>Консультация ипотечного брокера</li>
                            <li>Ведение сделки юридическим отделом компании</li>
                            <li>Заключение страховых договоров при желании</li>
                            <li>Помощь в организации ремонтных работ</li>
                        </ul>
                        <p>Наша цель - обеспечить вам полное сопровождение и поддержку на каждом этапе покупки дома.
                        Задавайте любые другие вопросы, связанные с покупкой дома.</p>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};