import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import {ThemeProvider} from "@mui/material";
import {house23Theme} from "./style/themes";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={house23Theme}>
        <RouterProvider router={router}/>
    </ThemeProvider>

);

