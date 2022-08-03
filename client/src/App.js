import {Route, Routes} from 'react-router-dom';

import {Home} from "./components/layout/Home";
import {Login} from "./components/pages/Login";
import {Register} from "./components/pages/Register";
import {ShowUsers} from "./components/Users/ShowUsers";
import {UserDetails} from "./components/Users/UserDetails";
import {EditUser} from "./components/Users/EditUser";

const App = () => {
    return (
        <Home>
            <Routes>
                <Route path="/" element={<Login /> } />
                <Route path="/register" element={<Register /> } />
                <Route path="/users" element={<ShowUsers /> } />
                <Route path="/users/details/:id" element={<UserDetails/>} />
                <Route path="/users/edit/:id" element={<EditUser/>} />
            </Routes>
        </Home>
    );
}

export default App;
