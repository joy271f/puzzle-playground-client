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
                element: <SingleToy />,
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
                element: <MyToys />
            },
            {
                path: 'add-toy',
                element: <AddToy />
            },
            {
                path: 'blog',
                element: <Blog />
            },


            {
                path: '*',
                element: <Error />
            }
        ],
    },
]);


export default router;