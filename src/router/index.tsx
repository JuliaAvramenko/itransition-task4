import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootPage from '../pages/rootPage/rootPage'
import ErrorPage from '../pages/errorPage/errorPage'
import MainPage from '../pages/mainPage/mainPage'
import AuthPage from '../pages/authPage/authPage'
import RegistrationPage from '../pages/registrationPage/registrationPage'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <MainPage />
            },
            {
                path: "/authpage",
                element: <AuthPage />
            },
            {
                path: "/registration",
                element: <RegistrationPage />
            }

        ]
    }
])