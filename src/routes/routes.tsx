import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
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
        path:'/shop',
        element: <Shop/>
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