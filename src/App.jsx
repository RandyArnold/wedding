import {useState} from 'react'

import {createBrowserRouter, Outlet, RouterProvider, useLocation} from "react-router-dom";

import {Navbar} from './components/Navbar.jsx'
import Footer from "./components/Footer.jsx";

import {IntlProvider} from "react-intl";
import {LOCALES} from "./i18n/locales";
import {messages} from "./i18n/messages";


import './App.css'
import HomePage from "./components/HomePage.jsx";
import Accommodation from "./components/Accommodation.jsx";
import Test from "./components/Test.jsx";

const navigation = [
    {
        id: 'nav_home',
        path: '/',
        current: true
    },
    // {
    //     id: 'nav_accommodation',
    //     path: '/accommodation',
    //     current: false
    // },
    // {
    //     id: 'Projects',
    //     path: '/home',
    //     href: '#',
    //     current: false
    // },
    // {
    //     id: 'Calendar',
    //     path: '/home',
    //     href: '#',
    //     current: false
    // },
]

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/accommodation',
                element: <Accommodation/>
            },
            {
                path: '/test',
                element: <Test/>
            },
        ]
    }

]);


function Layout() {
    const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

    const switchLocale = () => {
        const newLocale = currentLocale === LOCALES.GERMAN ? LOCALES.FRENCH : LOCALES.GERMAN;
        setCurrentLocale(newLocale);
        // storing locale in the localstorage
        localStorage.setItem("locale", newLocale);
    };


    //localstorage
    function getInitialLocal() {
        // getting stored items
        const savedLocale = localStorage.getItem("locale");

        if (savedLocale && (savedLocale === LOCALES.GERMAN || savedLocale === LOCALES.FRENCH))
            return savedLocale;

        const navLocale = navigator.language;

        if (Object.values(LOCALES).indexOf(navLocale) > -1) {
            localStorage.setItem("locale", navLocale);
            return navLocale;
        }

        localStorage.setItem("locale", LOCALES.GERMAN);

        return LOCALES.GERMAN;
    }

    return (
        <>
            <IntlProvider
                messages={messages[currentLocale]}
                locale={currentLocale}
                defaultLocale={LOCALES.GERMAN}
            >
                <Navbar navigation={navigation} currentLocale={currentLocale} switchLocale={switchLocale}/>
                <Outlet/>
                <Footer navigation={navigation}/>
            </IntlProvider>
        </>
    )
}

function App() {
    return <RouterProvider router={router}/>
}

export default App
