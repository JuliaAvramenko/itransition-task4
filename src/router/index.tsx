import React from 'react'
import { Routes, createBrowserRouter } from 'react-router-dom'
import RootPage from '../pages/rootPage/rootPage'
import ErrorPage from '../pages/errorPage/errorPage'
import MainPage from '../pages/mainPage/mainPage'
import AuthPage from '../pages/authPage/authPage'

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
            }
          
        ]
    }
])