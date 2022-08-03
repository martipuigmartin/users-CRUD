import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Link, useNavigate, useParams} from 'react-router-dom';

//TODO: change endPoint to environment variable
const endPoint = 'http://localhost:8000/api';

export const Edit = () => {
    const [user, setUser] = useState({});

    const navigate = useNavigate();
    const {id} = useParams();

    /**
     * The function is called when the form is submitted. It prevents the default action of the form, then sends a PUT
     * request to the API with the updated user information
     */
    const update = async (e) => {
        e.preventDefault();

        await axios.put(`${endPoint}/users/${id}`, {
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value
            },
            {
                headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
            })
        navigate('/users');
    }

    /* A hook that is called when the component is mounted. It is used to fetch the user information from the API. */
    useEffect(() => {
        axios.get(`${endPoint}/users/${id}`, {headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}})
            .then(response => {
                setUser(response.data);
            });
    }, []);

    return (
        <div className="grid mt-28 place-items-center">
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold tracking-wide">Edit User</h2>
                        <form onSubmit={update}>
                            <p className="dark:text-gray-100">
                                <label>Name: </label>
                                <input className="dark:bg-gray-900" type="text" name="name" required
                                       defaultValue={user.name}/>
                            </p>
                            <p className="dark:text-gray-100">
                                <label>Email: </label>
                                <input className="dark:bg-gray-900" type="email" name="email" required
                                       defaultValue={user.email}/>
                            </p>
                            <p className="dark:text-gray-100">
                                <label>Password: </label>
                                <input className="dark:bg-gray-900" type="text" name="password" required/>
                            </p>
                            <button className=" text-white font-bold py-2 px-4 rounded" type="submit">Update</button>
                            <Link className="text-white font-bold py-2 px-4 rounded" to="/users">Go back</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

