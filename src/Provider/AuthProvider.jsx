import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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
    const [user, setUser] =  useState("")
    const [loading, setLoading] = useState(true)

    // Register
    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    // LogOut
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }

    const updateUserProfile =(name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        });
    }

    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
            setUser(loggedInUser)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    } ,[])


    const authInfo = {
        user,
        loading,
        googleSignIn,
        githubSignIn,
        signUpUser,
        signInUser,
        signOutUser,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;