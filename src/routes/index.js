// Necessary Imports
import React from "react";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import AuthMainLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import Home from '../pages/home/Home';
import Page404 from '../pages/lost/Page404';
import Page500 from '../pages/lost/Page500';
// pages import for routing like login signup 404 and others 


// Routing function

export default function Router() {
    return useRoutes([
        {
            path: "",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
                // {
                //     path: "category",
                //     element: <Category />,
                // },
            ],
        },

        {
            path: "",
            element: <AuthMainLayout />,
            children: [
                {
                    path: "signup",
                    element: <Signup />,
                },
                {
                    path: "login",
                    element: <Login />,
                },
            ],
        },

        { path: "404", element: <Page404 /> },
        { path: "500", element: <Page500 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}