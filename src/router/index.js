import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/basic/MainPage";
import React from "react";
import App, {loader as appLoader} from "../App";
import CatalogOfHouses from '../pages/basic/CatalogOfHouses'
import WaysOfPayment from "../pages/basic/WaysOfPayment";
import Services from "../pages/basic/Services";
import AbotUs from "../pages/basic/AbotUs";
import AdminPage, {loader as adminLoader} from "../pages/adminPanel/AdminPage/AdminPage";
import HousePanel from "../pages/adminPanel/HousePanel/HousePanel";
import OAuth2RedirectHandler from "../pages/OAuth2RedirectHandler/OAuth2RedirectHandler";
import BackCallsPanel from "../pages/adminPanel/BackCallsPanel/BackCallsPanel";
import ProfilePage from "../pages/basic/ProfilePage/ProfilePage";
import ProfileDataPage from "../pages/basic/ProfilePage/children/ProfileDataPage/ProfileDataPage";
import ProfileBookings from "../pages/basic/ProfilePage/children/ProfileBookings/ProfileBookings";
import ProfileFavorite, {loader as favouriteLoader} from "../pages/basic/ProfilePage/children/ProfileFavorite/ProfileFavorite";
import UsersPanel from "../pages/adminPanel/UsersPanel/UsersPanel";

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
            {
                path: 'profile',
                element: <ProfilePage/>,
                children: [
                    {
                        path: 'data',
                        element: <ProfileDataPage/>
                    },
                    {
                        path: 'bookings',
                        element: <ProfileBookings/>
                    },
                    {
                        path: 'favorite',
                        element: <ProfileFavorite/>,
                        loader: favouriteLoader
                    },
                ]
            }
        ]
    },
    {
        path: 'admin',
        element: <AdminPage/>,
        loader: adminLoader,
        children: [
            {
                path: 'houses',
                element: <HousePanel/>
            },
            {
                path: 'backCalls',
                element: <BackCallsPanel/>
            },
            {
                path: 'users',
                element: <UsersPanel/>
            }
        ]
    },
    {
        path: 'oauth2',
        element: <OAuth2RedirectHandler/>
    }

])