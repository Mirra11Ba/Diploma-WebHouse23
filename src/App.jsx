import "./style/index.css";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MainPage from "./pages/basic/MainPage";
import {ThemeProvider} from "@mui/material";
import {house23Theme} from "./style/themes";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import WrapperFullWidth from "./components/layout/wrappers/Wrapper-full-width";
import {Outlet} from 'react-router-dom'
import fetchData from "./hooks/fetchData";

export const loader = async () => {
    console.log('app loaded')
    await fetchData();
    return null
}

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={house23Theme}>
                <WrapperFullWidth>
                    <Header/>
                    <Outlet/>
                </WrapperFullWidth>
                <Footer/>
            </ThemeProvider>
        </div>
    );
}

export default App;