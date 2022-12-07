const express = require('express');
const app = express();

app.listen(3000);

/** @params
 * path, request and result
 */
app.get('/', (req, res) => {
  console.log('here');
  // Dispatch message to viewer
  res.send('Hi');
});
