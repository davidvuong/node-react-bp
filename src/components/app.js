import React from 'react';
import { Link, IndexLink } from 'react-router';

class App extends React.Component {
    render() {
        return <div>
            <h1>Node + ReactJS Boilerplate</h1>

            <ul>
                <li><IndexLink to="/">app</IndexLink></li>
                <li><Link to="/example-1">example-1</Link></li>
                <li><Link to="/example-2">example-2</Link></li>
            </ul>

            {this.props.children}
        </div>;
    }
}

export default App;
