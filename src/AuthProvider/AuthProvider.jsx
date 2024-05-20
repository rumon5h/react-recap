import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);

    }

    useEffect(() => {
        const unscubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                setUser(currentUser);

                console.log(currentUser);
            }
        })

        return () => {
            return unscubscribe;
        }
    },[])

    const authInfo = {user, googleLogin, createUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;