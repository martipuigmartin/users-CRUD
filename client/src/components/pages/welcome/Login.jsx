import React, {useState} from "react";
import axios from "axios";

import {useNavigate} from "react-router-dom";

const endPoint = 'http://localhost:8000/api';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    /* This is checking if the user is logged in. If they are, they are redirected to the users page */
    const isLoggedIn = sessionStorage.getItem("token") !== null;
    if (isLoggedIn) {
        navigate('/users');
    }

    /**
     * The function makes a request to the backend server, and if the request is successful, it stores the token in the
     * session storage and navigates to the users page
     */
    const makeRequest = (e) => {
        e.preventDefault();

        const userData = {
            email,
            password
        };
        axios.post(endPoint, userData, {headers: {'Accept': 'application/json'}}).then(response => {
            sessionStorage.setItem('token', response.data.access_token);
            alert(response.data.message);
            navigate('/users');
        }).catch(() => {
            alert("Login failed");
        });
    }

    return (
        <section>
            <form onSubmit={makeRequest}>
                <div className="grid mt-28 place-items-center">
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-semibold tracking-wide">Login</h2>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="email" className="text-sm">Email</label>
                                    <input id="email" type="email" placeholder="Email" autoComplete="email" autoFocus
                                           value={email}
                                           onChange={e => setEmail(e.target.value)}
                                           className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"/>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                    <input id="password" type="text" placeholder="Password" required
                                           autoComplete="current-password" value={password}
                                           onChange={e => setPassword(e.target.value)}
                                           className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"/>
                                </div>
                                <div className="col-span-full">
                                    <div className="flex items-center space-x-2">
                                        <button type="submit"
                                                className="px-4 py-2 border rounded-md dark:border-gray-100">Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}
