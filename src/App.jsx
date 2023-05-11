import "./style/index.css";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MainPage from "./components/pages/MainPage";
import {ThemeProvider} from "@mui/material";
import {house23Theme} from "./style/themes";


function App() {
    return (
        <div className="App">
            <ThemeProvider theme={house23Theme}>
                <MainPage/>
            </ThemeProvider>
        </div>
    );
}

export default App;