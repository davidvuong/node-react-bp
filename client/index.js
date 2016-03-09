#!/usr/bin/env node
/**
 * node-react-bp/client/index.jsx
 *
 * Copyright (c) 2016 David Vuong <david.vuong256@gmail.com>
 * Licensed MIT
 */
import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/hello-world';

ReactDOM.render(
    <div>
        <HelloWorld />
    </div>,
    document.getElementById('app')
);
