import React from "react";
import Navbar from "../Navbar";

export const Home = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="container">
                { children }
            </div>
        </div>
    );
};