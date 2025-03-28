import React from 'react';
import { Link } from 'react-router-dom';
import InputField from "../components/input-field/InputField";

function SignUp() {
  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
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
          <InputField
              type="username"
              name="username-field"
              title="Gebruikersnaam"
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