import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './Pages/Login';
import NewUser from "./Pages/NewUser"

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/newuser" component={NewUser} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;