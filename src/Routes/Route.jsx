import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllToy from "../pages/AllToy/AllToy";
import Home from "../pages/Home/Home/Home";
import Signin from "../pages/Home/Login/Signin";
import Signup from "../pages/Home/Login/Signup";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/all-toy',
                element: <AllToy />
            },
            {
                path: 'sign-in',
                element: <Signin />
            },
            {
                path: 'sign-up',
                element: <Signup />
            }
        ],
    },
]);


export default router;