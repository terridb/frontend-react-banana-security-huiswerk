import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import InputField from "../components/input-field/InputField";

function SignIn() {
    const {login} = useContext(AuthContext);
    const [emailValue, setEmailValue] = useState('');

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
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                />
                <InputField
                    type="password"
                    name="password-field"
                    title="Wachtwoord"
                />
                <button
                    onClick={() => login(emailValue)}
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