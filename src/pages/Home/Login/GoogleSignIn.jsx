import { useContext, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";

const GoogleSignIn = () => {
    const {googleSignIn, githubSignIn} = useContext(AuthContext);
    const [error, setError] = useState('')

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                if(user){
                    toast.success("Google Login Successful")
                    setError(null)
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