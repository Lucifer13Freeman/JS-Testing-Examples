import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";


const Users = () => 
{
    const [users, setUsers] = useState([]);

    const loadUsers = async () => 
    {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(res.data);
    }

    useEffect(
        () => { loadUsers(); }
        // async () => { await loadUsers() }
    //     () => {
            
    //         let controller = new AbortController();
    //         (async () => 
    //         {
    //             try 
    //             { 
    //                 const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    //                 setUsers(res.data); 
    //                 controller = null;
    //             } 
    //           catch (e) { }
    //     })();
    //     return () => controller?.abort();
    , []);

    return (
        <div data-testid="users-page">
            { users.map(user => 
            <Link
                to={`/users/${user.id}`}
                key={user.id}
                data-testid="user-item"
            >
                {user.name}
            </Link>) }
        </div>
    );
}

export default Users;