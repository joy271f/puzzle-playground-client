import { useContext, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleSignIn = () => {
    const {googleSignIn, githubSignIn} = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                if(user){
                    toast.success("Google Login Successful")
                    setError(null)
                    navigate(from, { replace: true })
                }
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                if(user){
                    toast.success("GitHub Login Successful")
                    setError(null)
                    navigate(from, { replace: true })
                }
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }

    return (
        <div className="flex gap-4 mx-auto"> 
            <button onClick={handleGoogleSignIn}><FaGoogle className="text-2xl text-red-700"/></button>
            <button onClick={handleGithubSignIn}><FaGithub className="text-2xl text-purple-800"/></button>
            <p className="text-red-600">{error}</p>
        </div>
    );
};

export default GoogleSignIn;