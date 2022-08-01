import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {ShowUsers} from "./components/Users/ShowUsers";
import {EditUser} from "./components/Users/EditUser";
import {UserDetails} from "./components/Users/UserDetails";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ShowUsers/>}/>
                    <Route path="users/edit/:id" element={<EditUser/>}/>
                    <Route path="users/details/:id" element={<UserDetails/>}/>
                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default App;
