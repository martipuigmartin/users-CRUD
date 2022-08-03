import {useState} from "react";
import {useForm} from "../resources/hooks/useForm";
import axios from "axios";

const endPoint = 'http://localhost:8000/api';

export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setErrors, renderFieldError, navigate } = useForm();

    const makeRequest = (e) => {
        e.preventDefault();
        setErrors(null);
        axios.post(`${endPoint}/register`, {
            name,
            email,
            password,
        }).then(response => {
            console.log(response.data.user);
            if(response.data.user) {
                alert("Register success");
                navigate('/');
            }
        }).catch(error => {
            console.log(error);
            if(error.response) {
                if (error.response.data.errors) {
                    setErrors(error.response.data.errors);
                }
            }
        });
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Register</div>
                    <div className="card-body">
                        <form method="POST" action="#" onSubmit={makeRequest}>
                            <div className="row mb-3">
                                <label className="col-md-4 col-form-label text-md-end">Name</label>
                                <div className="col-md-6">
                                    <input id="name" type="text"
                                           className="form-control" name="name" required autoComplete="name" autoFocus value={name} onChange={e => setName(e.target.value)} />
                                    {renderFieldError('name')}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-md-4 col-form-label text-md-end">E-Mail Address</label>
                                <div className="col-md-6">
                                    <input id="email" type="email"
                                           className="form-control" name="email" required autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} />
                                    {renderFieldError('email')}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-md-4 col-form-label text-md-end">Password</label>
                                <div className="col-md-6">
                                    <input id="password" type="password"
                                           className="form-control"
                                           name="password" required autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} />
                                    {renderFieldError('password')}
                                </div>
                            </div>
                            <div className="row mb-0">
                                <div className="col-md-6 offset-md-4">
                                    <button type="submit" className="btn btn-primary">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};