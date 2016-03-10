#!/usr/bin/env node
'use strict';
import React, { Component } from 'react';
import HelloWorld from './hello-world';

class App extends Component {
    render() {
        return <div>
            <h1>Node + ReactJS Boilerplate</h1>
            <HelloWorld />
        </div>;
    }
}

export default App;
