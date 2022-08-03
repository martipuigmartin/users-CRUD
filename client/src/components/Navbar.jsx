import React from "react";
import {Link, useNavigate} from "react-router-dom";

function Navbar() {
    const isLoggedIn = sessionStorage.getItem("token") !== null;
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem("token");
        navigate("/");
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        {isLoggedIn ? (
                            <li className="nav-item" onClick={logout}>
                                Logout
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Login</Link>
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;