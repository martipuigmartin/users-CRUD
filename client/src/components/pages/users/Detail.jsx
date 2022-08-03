import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Link, useParams} from 'react-router-dom';

const endPoint = 'http://localhost:8000/api';

export const Detail = () => {
    const [user, setUser] = useState({});

    const {id} = useParams();

    /* A hook that is called when the component is mounted */
    useEffect(() => {
        axios.get(`${endPoint}/users/${id}`, {headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}})
            .then(response => {
                setUser(response.data);
            })
    }, []);

    return (
        <div className="grid mt-28 place-items-center">
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-semibold tracking-wide">User details</h2>
                        <p className="dark:text-gray-100">Name: {user.name}</p>
                        <p className="dark:text-gray-100">Email: {user.email}</p>
                        <p>
                            <Link className="text-white font-bold py-2 px-4 rounded"
                                  to="/users">Go back</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
