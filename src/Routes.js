import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Pages/Home";
import LandingPage from "./Pages/LandingPage";

import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";

function CustomRoutes({isPrivate, ...props}){
    let authenticaded = true;

    if(isPrivate && !authenticaded){
        return(
            <Redirect to="/login" />
        );
    }

    return <Route {...props} />;
}

export default function Routes(){
    return(
        <Switch>
            <CustomRoutes exact path="/" component={LandingPage} />
            <CustomRoutes exact path="/login" component={Login} />
            <CustomRoutes exact path="/cadastro" component={Cadastro} />
            <CustomRoutes isPrivate exact path="/home/:id" component={Home} />
            <CustomRoutes path="*" component={NotFound} />
        </Switch>
    )
}
