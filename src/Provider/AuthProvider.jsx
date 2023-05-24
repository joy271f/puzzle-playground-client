import { createContext } from "react";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
}

const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider)
}

const AuthProvider = ({ children }) => {

    const authInfo = {
        googleSignIn,
        githubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;