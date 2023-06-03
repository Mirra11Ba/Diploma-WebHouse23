import React from "react";
import WrapperFullWidth from "../../components/layout/wrappers/Wrapper-full-width";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import WrapperMainContent from "../../components/layout/wrappers/Wrapper-main-content";
import AdvantageList from "../../components/advantage/AdvantageList";
import PaymentMethodList from "../../components/paymentMethod/PaymentMethodList";

export default function WaysOfPayment() {
    return(
    <>
        {/*Блок преимущества*/}
        <WrapperMainContent>
            {/*Блок способы оплаты*/}
            <h3 style={{marginBottom: "30px", marginTop: "30px"}}>Способы оплаты</h3>
            <PaymentMethodList/>

        </WrapperMainContent>
    </>
    );
};

