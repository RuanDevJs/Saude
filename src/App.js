import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import { UserProvider } from "./Contexts/User";

import "./App.css";


function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
