import React from 'react';

if (process.env.BROWSER) {
    require('./ExampleComponent2.scss');
}

class ExampleComponent2 extends React.Component {
    render() {
        return (
            <div className='example-component-2'>
                <p>Hello, world (e.g. 2)!</p>
            </div>
        );
    }
}

export default ExampleComponent2;
