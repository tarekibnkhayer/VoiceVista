import { createContext, useEffect, useState} from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext();

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            setUser(currentUser);
            setLoading(false);
            if(currentUser){
                // Todo: save the token
                console.log(currentUser, userEmail);
            }
            else {
                // Todo: logout and remove the token
                console.log("hello")
            }
        });
        return () => unSubscribe()
    },[ user]);
    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider);
    };
    const updateUserInfo = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const logoutUser = () => {
        setLoading(false);
        return signOut(auth);
    };
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleLogin,
        updateUserInfo,
        logoutUser,
    };
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;
AuthProviders.propTypes = {
    children: PropTypes.node
}