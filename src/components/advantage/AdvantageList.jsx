import React from "react";
import AdvantageItem from "./AdvantageItem";
import IcoCottage from "../../media/svg/cottage.svg";
import IcoWallet from "../../media/svg/account_balance_wallet.svg";
import IcoHomePin from "../../media/svg/home_pin.svg";
import IcoClientNotes from "../../media/svg/clinical_notes.svg";
import IcoCheckMark from "../../media/svg/approval_delegation.svg";



export default function AdvantageList(props) {
    const advantages = [
        {id: 1, icon: IcoCottage, text: 'Широкий \n' + 'выбор \n' + 'локаций строек'},
        {id: 2, icon: IcoWallet, text: 'Недвижимость от элитной до эконома'},
        {id: 3, icon: IcoHomePin, text: 'Посещение стройки online и offline'},
        {id: 4, icon: IcoClientNotes, text: 'Заключение договора купли-продажи'},
        {id: 5, icon: IcoCheckMark, text: 'Богатый опыт\n' + '15 лет \n' + 'на рынке'},
    ];
    const list = advantages.map(advantage =>
        <AdvantageItem icon={advantage.icon} text={advantage.text} key={advantage.id}/>
    )
    return (
        <div>
            <h1>Преимущества</h1>
            {list}
        </div>
    );
};