import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const endPoint = 'http://localhost:8000/api';

export const Show = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${endPoint}/users`, {headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}})
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(err => {
                    setError(err);
                    setLoading(false);
                }
            );
    }, []);

    const deleteUser = async (id) => {
        setLoading(true);
        try {
            await axios.delete(`${endPoint}/users/${id}`, {headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}});
            setUsers(users.filter(user => user.id !== id));
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }

    return (
        loading ? <p>Loading...</p> :
            error ? <p>{error.message}</p> :
                <div>
                    <h1>Users</h1>
                    <table>Users
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/users/edit/${user.id}`}>Edit</Link>
                                    <Link to={`/users/details/${user.id}`}>Details</Link>
                                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
    );
}