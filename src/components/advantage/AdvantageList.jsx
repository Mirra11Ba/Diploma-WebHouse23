import React from "react";
import AdvantageItem from "./AdvantageItem";
import IcoCottage from "../../media/svg/advantage/cottage.svg";
import IcoWallet from "../../media/svg/advantage/account_balance_wallet.svg";
import IcoHomePin from "../../media/svg/advantage/home_pin.svg";
import IcoClientNotes from "../../media/svg/advantage/clinical_notes.svg";
import IcoCheckMark from "../../media/svg/advantage/approval_delegation.svg";
import classes from "./Advantage.module.css";


export default function AdvantageList(props) {
    const advantages = [
        {id: 1, icon: IcoCottage, text: 'Широкий выбор локаций строек'},
        {id: 2, icon: IcoWallet, text: 'Недвижимость от элитной до эконома'},
        {id: 3, icon: IcoHomePin, text: 'Посещение стройки online и offline'},
        {id: 4, icon: IcoClientNotes, text: 'Заключение договора купли\u00A0-\u00A0продажи'},
        {id: 5, icon: IcoCheckMark, text: 'Богатый опыт 15 лет на рынке'},
    ];
    const list = advantages.map(advantage =>
        <AdvantageItem icon={advantage.icon} text={advantage.text} key={advantage.id}/>
    )
    return (
        <div className={classes.flexListContainer}>
            {list}
        </div>
    );
};