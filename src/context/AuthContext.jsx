import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import axios from "axios";
import {checkTokenValidity} from "../helpers/checkTokenValidity";

export const AuthContext = createContext(null);

function AuthContextProvider({children}) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken && checkTokenValidity(storedToken)) {
            void login(storedToken);
        } else {
            void logout();
        }
    }, []);

    const login = async (jwtToken) => {
        const decodedToken = jwtDecode(jwtToken);
        localStorage.setItem("token", jwtToken);

        try {
            const response = await axios.get(
                `http://localhost:3000/600/users/${decodedToken.sub}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwtToken}`,
                    },
                },
            );
            setAuth({
                isAuth: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.sub,
                },
                status: "done",
            });
        } catch (err) {
            console.error(err);
        } finally {
            console.log("De gebruiker is ingelogd!");
        }

    }

    useEffect(() => {
        if (auth.isAuth) {
            navigate("/profile");
        }
    }, [auth.isAuth]);

    const logout = () => {
        localStorage.removeItem("token");
        setAuth({
            isAuth: false,
            user: null,
            status: "done",
        });
        console.log("Gebruiker is uitgelogd!");
        navigate("/");
    };

    const data = {
        isAuth: auth.isAuth,
        user: auth.user,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={data}>
            {auth.status === "done" ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;