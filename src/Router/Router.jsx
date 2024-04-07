import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

import Favorites from "../Componentes/Favorites/Favorites";
import Home from "../Componentes/Home/Home";
import Login from "../Componentes/Login/Login";
import ErrorPage from "../Componentes/ErrorPage/ErrorPage";
import Phone from "../Componentes/Phone/Phone";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('/phones.json')
            },
            {
                path: '/favorites',
                element: <Favorites></Favorites>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/phones/:id',
                element: <Phone></Phone>,
                loader: ()=>fetch('/phones.json')
            }
        ]
            
    }
])
export default router;