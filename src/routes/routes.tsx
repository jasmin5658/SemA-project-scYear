import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import NotFound from "../pages/notFound";
import Register from "../pages/Register";
import Admin from "../pages/Admin";
import Profile from "../pages/Profile";
import PaymentPage from "../pages/payment";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/store',
        element: <Store />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/footer',
        element: <Footer />
    },
    {
        path: '/*',
        element: <NotFound />
    },
    {
        path: '/Admin',
        element: <Admin />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/payment',
        element: <PaymentPage/>
    }

]);