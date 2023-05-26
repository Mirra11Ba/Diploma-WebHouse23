import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/basic/MainPage";
import React from "react";
import App, {loader as appLoader} from "../App";
import CatalogOfHouses from '../pages/basic/СatalogOfHouses'
import WaysOfPayment from "../pages/basic/WaysOfPayment";
import Services from "../pages/basic/Services";
import AbotUs from "../pages/basic/AbotUs";
import AdminPage from "../pages/adminPanel/AdminPage/AdminPage";
import HousePanel from "../pages/adminPanel/HousePanel/HousePanel";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        loader: appLoader,
        children: [
            {
                path: '/',
                element: <MainPage/>,
            },
            {
                path: 'catalog',
                element: <CatalogOfHouses/>
            },
            {
                path: 'payments',
                element: <WaysOfPayment/>
            },
            {
                path: 'about',
                element: <AbotUs/>
            },
            {
                path: 'services',
                element: <Services/>
            },
            {
                path: 'contacts',
                element: <CatalogOfHouses/>
            },
        ]
    },
    {
        path: 'admin',
        element: <AdminPage/>,
        loader: appLoader,
        children: [
            {
                path: 'houses',
                element: <HousePanel/>
            }
        ]
    },

])