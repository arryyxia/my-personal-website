import MainLayout from "@/components/layouts/MainLayout";
import Blog from "@/components/myComponents/Blog";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <MainLayout>
                <Home />
            </MainLayout>
        ),
    },
    {
        path: "/login",
        element: <Login />, // No layout for login
    },
    {
        path: "/blogs",
        element: (
            <MainLayout>
                <Blog />
            </MainLayout>
        ),
    },
]);
