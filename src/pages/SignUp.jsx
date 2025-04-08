import {Link, useNavigate} from 'react-router-dom';
import InputField from "../components/input-field/InputField";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

function SignUp() {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const handleRegister = async (data) => {
        try {
            const response = await axios.post("http://localhost:3000/register", {
                email: data.email,
                password: data.password,
                username: data.username,
            });
            if (response.status === 201) {
                login(response.data.accessToken);
            }
        } catch (err) {
            console.error(err);
        } finally {
            console.log(`${data.username} is succesvol geregistreerd!`)
            navigate("/signin");
        }
    };

    return (
        <>
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque
                eligendi
                harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur
                deserunt
                doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
            <form onSubmit={handleSubmit(handleRegister)}>
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
                <InputField
                    type="text"
                    name="username"
                    title="Gebruikersnaam"
                    register={register}
                />
                <button>
                    Registreren
                </button>
            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;