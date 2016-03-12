import React from 'react';
import { Link, IndexLink } from 'react-router';

if (process.env.BROWSER) {
    require('./Home.scss');
}

class Home extends React.Component {
    render() {
        return <div className='home-page'>
            <p>You are at the home page!</p>
        </div>;
    }
}

export default Home;
