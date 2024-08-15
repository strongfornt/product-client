import {
    createBrowserRouter,
   
  } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Resgister";


 export const router = createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    }
 ])