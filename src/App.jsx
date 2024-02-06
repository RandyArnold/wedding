import {useState} from 'react'

import {BrowserRouter, Routes, Route, createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

import {Navbar} from './components/Navbar.jsx'
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer.jsx";

import {IntlProvider} from "react-intl";
import {LOCALES} from "./i18n/locales";
import {messages} from "./i18n/messages";


import './App.css'
import {HomePage} from "./components/HomePage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/test',
                element: <HomePage></HomePage>
            }
        ]
    }

]);


function Layout() {
    const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

    const handleChange = (e) => {

        setCurrentLocale(e.target.value);
        // storing locale in the localstorage
        localStorage.setItem("locale", e.target.value);
    };

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
        return savedLocale || LOCALES.GERMAN;
    }

    return (
        <>
            <IntlProvider
                messages={messages[currentLocale]}
                locale={currentLocale}
                defaultLocale={LOCALES.GERMAN}
            >
                <Navbar currentLocale={currentLocale} handleChange={handleChange} switchLocale={switchLocale}/>
                <div className="py-10">
                    <header>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
                        </div>
                    </header>
                    <main>
                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <Outlet/>
                        </div>
                    </main>
                </div>
                <Header currentLocale={currentLocale} handleChange={handleChange}/>
                <Footer/>
            </IntlProvider>
        </>
    )
}

function App() {
    return <RouterProvider router={router}/>
}

export default App
