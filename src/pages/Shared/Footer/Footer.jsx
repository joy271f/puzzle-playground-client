import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Footer = () => {
    const{user} =useContext(AuthContext);
    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/all-toys'>All Toys</NavLink></li>
        {user ? <>
            <li><NavLink to='/my-toys'>My Toys</NavLink></li>
            <li><NavLink to='/add-toy'>Add A Toy</NavLink></li>
        </> : ''}
        <li><NavLink to='/blog'>Blog</NavLink></li>
    </>


    return (
        <div className="mt-12">
            <div className="mx-auto bg-slate-800 text-white p-4">
                <ul className="flex justify-center gap-6">
                    {navItems}
                </ul>
            </div>
            <div className="bg-rose-300">
                <h1 className="text-center">@copywrite 2023</h1>
            </div>
        </div>
    );
}
export default Footer;