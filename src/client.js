#!/usr/bin/env node
import { Render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

ReactDOM.render(
    <Router routes={routes} history={browserHistory} />,
    document.getElementById('app')
);
