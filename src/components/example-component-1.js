import React from 'react';

if (process.env.BROWSER) {
    require('../scss/components/example-component-1.scss');
}

class ExampleComponent1 extends React.Component {
    render() {
        return (
            <div className='example-component-1'>
                <p>Hello, world (e.g. 1)!</p>
            </div>
        );
    }
}

export default ExampleComponent1;
