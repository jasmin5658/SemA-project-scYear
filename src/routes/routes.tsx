import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Footer from "../pages/Footer";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/about',
        element: <About/>
    },
    {
        path:'/store',
        element: <Store/>
    },
    {
        path:'/contact',
        element: <Contact/>
    },
    {
        path:'/footer',
        element: <Footer/>
    }
]);