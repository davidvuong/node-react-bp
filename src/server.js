#!/usr/bin/env node
'use strict';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';

const app = express();

app.get('*', (req, res) => {
    match({ routes: routes, location: req.url }, (err, redirect, props) => {
        if (err) {
            res.status(500).send(err.message);
        } else if (redirect) {
            // we haven't talked about `onEnter` hooks on routes, but before a
            // route is entered, it can redirect. Here we handle on the server.
            res.redirect(redirect.pathname + redirect.search);
        } else if (props) {
            // if we got props then we matched a route and can render
            const appHtml = renderToString(<RouterContext {...props}/>);
            res.send(renderPage(appHtml));
        } else {
            res.status(404).send('Not Found');
        }
    })
});

function renderPage(appHtml) {
    return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <link rel=stylesheet href=/index.css>
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
   `
}

var PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Express server running at http://localhost:' + PORT)
});
