import React from 'react';
import { HashRouter, Switch, Route, Router } from 'react-router-dom';
import App from './App.js';
import Form from '../src/Components/Form/Form';



const router = (

    <Switch>
        <Route exact path ="/" component={App} />
        <Route path="/add" component={Form} />

    </Switch>
)

export default router;