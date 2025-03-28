import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import InputField from "../components/input-field/InputField";

function SignIn() {
    const {isAuth, login, logout} = useContext(AuthContext);

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form>
                <InputField
                    type="email"
                    name="email-field"
                    title="E-mail"
                />
                <InputField
                    type="password"
                    name="password-field"
                    title="Wachtwoord"
                />
                <button
                    onClick={login}
                    type="button"
                >
                    Inloggen
                </button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;