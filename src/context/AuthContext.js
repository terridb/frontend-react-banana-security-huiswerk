import {createContext, useState} from "react";

export const AuthContext = createContext({});

export function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState(false);

    function login() {
        toggleIsAuth(true);
    }

    function logout() {
        toggleIsAuth(false);
    }

    return (
        <AuthContext.Provider value={{
            isAuth,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
