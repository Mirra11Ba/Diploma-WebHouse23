import React from 'react';
import "./Wrapper.css";

const WrapperMainContent = function ({children}) {
    return (
        <div className={"wrapper-main-content"}>
            {children}
        </div>
    );
};

export default WrapperMainContent;