import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="font-serif">
            <Navbar />
            <Outlet />
            <Footer />
            <ToastContainer theme="colored" autoClose={2000} />
        </div>
    );
};

export default Main;