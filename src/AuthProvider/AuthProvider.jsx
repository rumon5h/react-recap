import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const googleProvider = GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);

    }

    const authInfo = {googleLogin};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;