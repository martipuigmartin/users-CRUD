import './App.css';

import {Route, Routes} from 'react-router-dom';

import {Home} from "./components/Layout/Home";
import {Login} from "./components/pages/Login";
import {Register} from "./components/pages/Register";

const App = () => {
    return (
        <Home>
            <Routes>
                <Route path="/" element={<Login /> } />
                <Route path="/register" element={<Register /> } />
            </Routes>
        </Home>
    );
}

export default App;
