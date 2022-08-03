import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

const endPoint = 'http://localhost:8000/api';

export const Detail = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        axios.get(`${endPoint}/users/${id}`, {headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}})
            .then(response => {
                setUser(response.data);
                setLoading(false);
            }).catch(err => {
                setError(err);
                setLoading(false);
            }
        );
    }
    , []);

    return (
        loading ? <p>Loading...</p> :
            error ? <p>{error.message}</p> :
                <div>
                    <h1>User Details</h1>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <Link to="/users">Back</Link>
                </div>
    )
}