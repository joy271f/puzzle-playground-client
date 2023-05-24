import { FaGoogle, FaGithub } from "react-icons/fa";

const GoogleSignIn = () => {
    return (
        <div className="flex gap-4 mx-auto">
            <FaGoogle className="text-2xl text-red-500"/>
            <FaGithub className="text-2xl text-purple-800"/>
        </div>
    );
};

export default GoogleSignIn;