import {Route, Routes} from 'react-router-dom';

import {Home} from "./components/layout/Home";
import {Login} from "./components/pages/Login";
import {Register} from "./components/pages/Register";
import {EditUser} from "./components/Users/EditUser";
import {ShowUsers} from "./components/Users/ShowUsers";
import {UserDetails} from "./components/Users/UserDetails";
import {useState} from "react";

const App = () => {
    return (
        <Home>
            <Routes>
                <Route path="/" element={<Login /> } />
                <Route path="/register" element={<Register /> } />
                <Route path="/users" element={<ShowUsers /> } />
            </Routes>
        </Home>
    );
}

export default App;
