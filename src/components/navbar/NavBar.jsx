import React, {useContext} from 'react';
import logo from '../../assets/banana-01.png';
import {useNavigate, Link} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import "./NavBar.css";

function NavBar() {
    const navigate = useNavigate();
    const {isAuth, logout, user} = useContext(AuthContext);

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>
            <div>
                {isAuth ? (
                    <div className="nav-right-wrapper">
                        <p>{user.username}</p>
                        <button
                            type="button"
                            onClick={logout}
                        >
                            Uitloggen
                        </button>
                    </div>
                ) : null
                }
                {!isAuth ? (
                    <>
                        <button
                            type="button"
                            onClick={() => navigate('/signin')}
                        >
                            Inloggen
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/signup')}
                        >
                            Registreren
                        </button>
                    </>
                ) : null
                }
            </div>
        </nav>
    );
}

export default NavBar;