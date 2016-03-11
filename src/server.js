import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import express from 'express';
import routes from './routes';

const app = express();
app.use(express.static('src/public'));

/* API router handles all requests made to `/api`. */
const apiRouter = express.Router();
apiRouter.route('/base-1')
    .get((req, res) => {
        res.send('hello from /api/base-1!');
    });

app.use('/api', apiRouter);
app.get('*', (req, res) => {
    match({ routes: routes, location: req.url }, (err, redirect, props) => {
        if (err) {
            res.status(500).send(err.message);

        // See: https://github.com/reactjs/react-router/blob/master/docs/API.md#redirect
        } else if (redirect) {
            res.redirect(redirect.pathname + redirect.search);

        // Matched a route in `routes`!
        } else if (props) {
            // TODO: Improve on this! ...later
            //
            // There has got to be a better way to do this that doesn't involve
            // reading from disk and replacing a special string in the index file.
            const html = fs.readFileSync('src/views/index.html', 'utf8');
            res.send(html.replace(
                '{app-data}', renderToString(<RouterContext {...props}/>)
            ));
        } else {
            res.status(404).send('Not Found');
        }
    })
});

var PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}... Press Ctrl+C to stop.`);
});
