import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App/App';
import Home from './containers/Home/Home';
import Detail from './containers/Detail/Detail';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>

        <Route path="/home" component={Home}/>
        <Route path="/detail" component={Detail}/>
    </Route>
);
