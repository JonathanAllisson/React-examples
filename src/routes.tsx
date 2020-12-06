import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Tour from './pages/Tour';
import Colors from './pages/Colors';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tour" component={Tour} />
        <Route path="/colors" component={Colors} />
    </Switch>
)

export default Routes;