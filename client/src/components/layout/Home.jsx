import React from "react";

import {Navbar} from "../Navbar";

export const Home = ({children}) => {
    return (
        <div>
            <Navbar/>
                {children}
        </div>
    );
};
