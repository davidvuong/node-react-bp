/* Builds the index.html file given the route context. */
function getIndex(context) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>node-react-bp</title>

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>
      <link rel="stylesheet" type="text/css" href="/style.css"/>
    </head>
    <body>
      <div id="app">${context}</div>
      <script src="/bundle.js"></script>
    </body>
    </html>
  `;
}

export default {
  getIndex
};
