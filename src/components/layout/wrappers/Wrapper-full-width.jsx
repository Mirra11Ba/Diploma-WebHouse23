import React from 'react';
import "./Wrapper.css";

const WrapperFullWidth = function ({children}) {
    return (
        <div className={"wrapper-full-width"}>
            {children}
        </div>
    );
};

export default WrapperFullWidth;