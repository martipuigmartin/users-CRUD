import React from "react";

import {Link, useNavigate} from "react-router-dom";

export const Navbar = () => {
    /* It checks if the user is logged in */
    const isLoggedIn = sessionStorage.getItem("token") !== null;
    const navigate = useNavigate();

    /**
     * It removes the token from the session storage and navigates to the home page
     */
    const logout = () => {
        sessionStorage.removeItem("token");
        navigate("/");
    }

    return (
        <header className="p-4 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex justify-between h-16 mx-auto">
                <a className="flex items-center p-2">
                    Users CRUD
                </a>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    {isLoggedIn ? (
                        <li className="flex" onClick={logout}>
                            <a className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Logout</a>
                        </li>
                    ) : (
                        <>
                            <li className="flex">
                                <Link to="/"
                                      className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Login</Link>
                            </li>
                            <li className="flex">
                                <Link to="/register"
                                      className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Registration</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </header>
    );
}
