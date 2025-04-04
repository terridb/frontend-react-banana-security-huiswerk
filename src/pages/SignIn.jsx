import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import InputField from "../components/input-field/InputField";
import {useForm} from "react-hook-form";
import axios from "axios";

function SignIn() {
    const {login} = useContext(AuthContext);
    const {register, handleSubmit} = useForm();

    const handleLogin = async (data) => {
        const controller = new AbortController();
        try {
            const response = await axios.post("http://localhost:3000/login", {
                email: data.email,
                password: data.password,
            }, { signal: controller.signal });
            if (response.status === 200) {
                login(response.data.accessToken);
            }
        } catch (err) {
            console.error(err);
        } finally {
            console.log(`${data.email} is succesvol ingelogd!`)
        }
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={handleSubmit(handleLogin)}>
                <InputField
                    type="email"
                    name="email"
                    title="E-mail"
                    register={register}
                />
                <InputField
                    type="password"
                    name="password"
                    title="Wachtwoord"
                    register={register}
                />
                <button
                    onClick={handleSubmit(handleLogin)}
                    type="submit"
                >
                    Inloggen
                </button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;