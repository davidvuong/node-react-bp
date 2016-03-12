import React from 'react';
import request from 'superagent-bluebird-promise';

if (process.env.BROWSER) {
    require('./ExampleComponent1.scss');
}

class ExampleComponent1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = { count: 0, text: 'nothing yet' };
        this.makeRequest = this.makeRequest.bind(this);
    }

    makeRequest() {
        this.setState({ count: this.state.count + 1 });
        request.get('/api/base-1/').then((res) => {
            this.setState({ text: res.text });
        }, (err) => {
            console.error(err);
        });
    }

    render() {
        return (
            <div className='example-component-1'>
                <p>Hello, world (e.g. 1)!</p>
                <button onClick={this.makeRequest}>
                    click me to send a request
                </button>
                Request count: {this.state.count}
                <br />
                Request text: {this.state.text}
            </div>
        );
    }
}

export default ExampleComponent1;
