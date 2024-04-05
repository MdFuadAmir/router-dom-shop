import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Componentes/Header/Home/Home";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
            
    }
])
export default router;