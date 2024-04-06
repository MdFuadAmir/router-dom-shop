import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

import Favorites from "../Componentes/Favorites/Favorites";
import Home from "../Componentes/Home/Home";
import Login from "../Componentes/Login/Login";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
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
            }
        ]
            
    }
])
export default router;