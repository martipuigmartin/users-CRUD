import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';

const endPoint = 'http://localhost:8000/api';

export const Show = () => {
    const [users, setUsers] = useState([]);

    /* A hook that is called after every render */
    useEffect(() => {
        axios.get(`${endPoint}/users`, {headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}})
            .then(response => {
                setUsers(response.data);
            })
    }, []);

    /**
     * It deletes a user from the database and then filters the users array to remove the deleted user
     */
    const deleteUser = async (id) => {
        try {
            await axios.delete(`${endPoint}/users/${id}`, {headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}});
            setUsers(users.filter(user => user.id !== id));
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leading-tight text-gray-900">User list</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <tbody>
                    {users.map(user => (
                        <tr key={user.id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td className="p-3">
                                <p>{user.name}</p>
                            </td>
                            <td className="p-3 text-right">
                                <p>{user.email}</p>
                            </td>
                            <td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
							 <Link to={`/users/edit/${user.id}`}>Edit</Link>
						</span>
                            </td>
                            <td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-green-400 dark:text-gray-900">
							<Link to={`/users/details/${user.id}`}>Details</Link>
						</span>
                            </td>
                            <td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-gray-900">
							<button onClick={() => deleteUser(user.id)}>Delete</button>
						</span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

