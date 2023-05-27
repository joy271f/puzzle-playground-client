import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div >
            <Navbar />
            <Outlet />
            <ToastContainer theme="colored" autoClose={2000} />
        </div>
    );
};

export default Main;