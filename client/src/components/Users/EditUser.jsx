import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';

const endPoint = 'http://localhost:8000/api';

export const EditUser = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const {id} = useParams();

    const update = async (e) => {
        e.preventDefault();

        (e.target.password.value) ? await axios.put(`${endPoint}/users/${id}`, {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }) : await axios.put(`${endPoint}/users/${id}`, {
            name: e.target.name.value,
            email: e.target.email.value
        });
        navigate('/');
    }

    useEffect(() => {
        axios.get(`${endPoint}/users/${id}`)
            .then(response => {
                setUser(response.data);
                setLoading(false);
            }).catch(err => {
                setError(err);
                setLoading(false);
            }
        );
    }, []);

    return (
        loading ? <p>Loading...</p> :
            error ? <p>{error.message}</p> :
                <div>
                    <h1>Edit User</h1>
                    <form onSubmit={update}>
                        <label>Name:</label>
                        <input type="text" name="name" defaultValue={user.name}/>
                        <label>Email:</label>
                        <input type="text" name="email" defaultValue={user.email}/>
                        <label>Password:</label>
                        <input type="text" name="password" defaultValue={user.password}/>
                        <button type="submit">Update</button>
                        <Link to="/">Back</Link>
                    </form>
                </div>
    )
}
