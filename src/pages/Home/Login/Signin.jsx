import Lottie from "lottie-react";
import login from "../../../../public/login.json";
import GoogleSignIn from "./GoogleSignIn";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Signin = () => {
    const { signInUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('');


    const from = location.state?.from?.pathname || '/';

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signInUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    toast.success("Sign in Successful")
                    setError(null)
                    form.reset();
                    navigate(from, { replace: true })
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left md:w-1/2">
                    <Lottie animationData={login} loop={true} />
                </div>
                <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="example@gmail.com" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p className="text-red-600">{error}</p>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign in" />
                            </div>
                            <div>
                                <h2 className="text-center my-5">------- OR -------</h2>
                            </div>
                            <GoogleSignIn />
                            <span className='mx-auto'>Are You New User? Please <Link to='/sign-up' className="text-red-500">Sign Up</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;