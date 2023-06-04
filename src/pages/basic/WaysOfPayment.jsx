import React from "react";
import WrapperMainContent from "../../components/layout/wrappers/Wrapper-main-content";
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

