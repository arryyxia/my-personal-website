import MainLayout from "@/components/layouts/MainLayout";
import Blog from "@/components/myComponents/Blog";
import DetailBlog from "@/components/myComponents/DetailBlog";
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
        element: <Login />,
    },
    {
        path: "/blogs",
        element: (
            <MainLayout>
                <Blog />
            </MainLayout>
        ),
    },
    {
        path: "/blog/:blogId",
        element: (
            <MainLayout>
                <DetailBlog />
            </MainLayout>
        ),
    },
]);
