import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const endPoint = 'http://localhost:8000/api';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const makeRequest = (e) => {
        e.preventDefault();

        const userData = {
            email,
            password
        };
        axios.post(endPoint, userData, {headers: {'Accept': 'application/json'}}).then(() => {
            alert("Login success");
            // TODO: change route to /users
            navigate('/register');
        }).catch(error => {
            alert("Login failed");
        });
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <form method="POST" action="#" onSubmit={makeRequest}>
                            <div className="row mb-3">
                                <label htmlFor="email" className="col-md-4 col-form-label text-md-end">Email
                                    Address</label>
                                <div className="col-md-6">
                                    <input id="email" type="email"
                                           className="form-control" name="email"
                                           required autoComplete="email" autoFocus value={email}
                                           onChange={e => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="password"
                                       className="col-md-4 col-form-label text-md-end">Password</label>
                                <div className="col-md-6">
                                    <input id="password" type="password"
                                           className="form-control" name="password"
                                           required autoComplete="current-password" value={password}
                                           onChange={e => setPassword(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row mb-0">
                                <div className="col-md-8 offset-md-4">
                                    <button type="submit" className="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
