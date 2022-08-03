import {Route, Routes} from 'react-router-dom';

import {Home} from "./components/layout/Home";
import {Login} from "./components/pages/welcome/Login";
import {Register} from "./components/pages/welcome/Register";
import {Show} from "./components/pages/users/Show";
import {Detail} from "./components/pages/users/Detail";
import {Edit} from "./components/pages/users/Edit";

const App = () => {
    return (
        <Home>
            <Routes>
                <Route path="/" element={<Login /> } />
                <Route path="/register" element={<Register /> } />
                <Route path="/users" element={<Show /> } />
                <Route path="/users/details/:id" element={<Detail/>} />
                <Route path="/users/edit/:id" element={<Edit/>} />
            </Routes>
        </Home>
    );
}

export default App;
