import { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";

const GoogleSignIn = () => {
    const {googleSignIn, githubSignIn} = useContext(AuthContext);


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                const errorMessage = error.message;
                if (errorMessage) {
                    console.log(errorMessage);
                }
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                const errorMessage = error.message;
                if (errorMessage) {
                    console.log(errorMessage);
                }
            })
    }

    return (
        <div className="flex gap-4 mx-auto"> 
            <button onClick={handleGoogleSignIn}><FaGoogle className="text-2xl text-red-700"/></button>
            <button onClick={handleGithubSignIn}><FaGithub className="text-2xl text-purple-800"/></button>
        </div>
    );
};

export default GoogleSignIn;