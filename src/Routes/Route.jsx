import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllToy from "../pages/AllToy/AllToy";
import Home from "../pages/Home/Home/Home";
import Signin from "../pages/Home/Login/Signin";
import SignUp from "../pages/Home/Login/Signup";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import Blog from "../pages/Blog/Blog";
import SingleToy from "../pages/SingleToy/SingleToy";
import Error from "../pages/Error/Error";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import PrivetRoute from "./PrivateRoute";


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
                path: '/all-toys',
                element: <AllToy />
            },
            {
                path: 'single-toy/:id',
                element: <PrivetRoute><SingleToy /></PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: 'sign-in',
                element: <Signin />
            },
            {
                path: 'sign-up',
                element: <SignUp />
            },
            {
                path: 'my-toys',
                element: <PrivetRoute><MyToys /></PrivetRoute>
            },
            {
                path: 'add-toy',
                element: <PrivetRoute><AddToy /></PrivetRoute>
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'updateToy/:id',
                element: <UpdateToy />,
                loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            },


            {
                path: '*',
                element: <Error />
            }
        ],
    },
]);


export default router;