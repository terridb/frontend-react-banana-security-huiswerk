import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: ""
    });
    const navigate = useNavigate();

    function login(email) {
        toggleIsAuth({
            isAuth: true,
            user: email
        });
        console.log(`${email} is ingelogd!`);
        navigate("/profile");
    }

    function logout() {
        toggleIsAuth({
            isAuth: false,
            user: ""
        });
        console.log("Gebruiker is uitgelogd!");
        navigate("/");
    }

    return (
        <AuthContext.Provider value={{
            isAuth: isAuth.isAuth,
            user: isAuth.user,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;