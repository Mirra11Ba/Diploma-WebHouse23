import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import './media/fonts/oswald/static/Oswald-Regular.ttf';
import './media/fonts/montserrat/static/Montserrat-Medium.ttf';
import './media/fonts/montserrat/static/Montserrat-Regular.ttf';
import './media/fonts/inter/static/Inter-Regular.ttf';
import {ThemeProvider} from "@mui/material";
import {house23Theme} from "./style/themes";
import {createBrowserRouter} from "react-router-dom";
import MainPage from "./pages/basic/MainPage";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={house23Theme}>
        <RouterProvider router={router}/>
    </ThemeProvider>

);

