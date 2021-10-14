import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Switch } from 'react-router';
import Main from './pages/Main';
import Auth from './pages/Auth';
import MainContextProvider from './context/MainContext';
import Update from './pages/Update';

const Routes = () => {
    return (
        <MainContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/auth" component={Auth} />
                    <Route exact path="/" component={Main} />
                    <Route exact path="/update/:docId" component={Update} />

                </Switch>
            </BrowserRouter>
        </MainContextProvider>
    );
};

export default Routes;