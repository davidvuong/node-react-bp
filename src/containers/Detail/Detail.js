import React from 'react';
import { Link, IndexLink } from 'react-router';

import ExampleComponent1 from '../../components/ExampleComponent1/ExampleComponent1';
import ExampleComponent2 from '../../components/ExampleComponent2/ExampleComponent2';

if (process.env.BROWSER) {
    require('./Detail.scss');
}

class Detail extends React.Component {
    render() {
        return <div className='detail-page'>
            <p>
                You are at the detail page!
            </p>

            <ExampleComponent1 />
            <br />
            <ExampleComponent2 />
        </div>;
    }
}

export default Detail;
