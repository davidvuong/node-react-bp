import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import ExampleComponent1 from './components/ExampleComponent1';
import ExampleComponent2 from './components/ExampleComponent2';

export default (
    <Route path="/" component={App}>
        <Route path="/example-1" component={ExampleComponent1}/>
        <Route path="/example-2" component={ExampleComponent2}/>
    </Route>
);
