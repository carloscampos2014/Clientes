import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './Pages/Login';
import DashBoard from './Pages/DashBoard'
import NewUser from "./Pages/NewUser"

const Routes = () => {
    const logado = sessionStorage.getItem("@EZBCLIENTES");
    if(logado){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboard" exact component={DashBoard} />
                </Switch>
            </BrowserRouter>
        )
    }
    else{
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/newuser" component={NewUser} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;