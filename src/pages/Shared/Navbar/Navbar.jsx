import { Link, NavLink } from "react-router-dom";
import logo from '../../../../public/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);



    const handleSignOut = () => {
        signOutUser()
            .then(
                toast.success("Successfully logout")
            )
            .catch()
    }

    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/all-toy'>All Toys</NavLink></li>
        {user ? <>
            <li><NavLink to='/my-toy'>My Toys</NavLink></li>
            <li><NavLink to='/add-toy'>Add A Toy</NavLink></li>
        </> : ''}
        <li><NavLink to='/blog'>Blog</NavLink></li>
    </>

    return (
        <div className="navbar h-24 sticky top-0 bg-base-100 z-10">
            <div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact bg-base-100 dropdown-content mt-3 p-2 rounded-box w-52 font-bold">
                        {navItems}
                    </ul>
                </div>
                <Link className="normal-case text-xl">
                    <img src={logo} alt="" className='md:w-60 md:ml-4 w-48' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 mx-12">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end ms-auto md:mr-4">

                {user?.email ?
                    <>
                        <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                            <img src={user.photoURL} alt="" className="w-12 mr-4 rounded-full" />
                        </div>
                        <button onClick={handleSignOut} className="btn btn-primary">Sign Out</button>
                    </> 
                    :
                    <>
                        <Link to='/sign-in' className="md:mr-4 mr-4">Sign in</Link>
                        <Link to='/sign-up'><button className="btn btn-primary">Sign up</button></Link>
                    </>
                }
            </div>
        </div >
    );
};

export default Navbar;