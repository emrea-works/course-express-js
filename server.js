const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

/** @params
 * path, request and result
 */
app.get('/', (req, res) => {
  console.log('here');
  // Send status by reserved http status codes
  //res.sendStatus(500);
  // Dispatch message to viewer
  //res.send('Hi');
  // Send status with a message
  //res.status(500).send('Server down (Error code: 500)');
  // Send status with a json
  //res.status(500).json({ message: 'Server down (Error code: 500)' });
  // Download a file
  //res.download('server.js');
  // Render a file to client
  /**
   * requires view engine, like pug or ejs
   */
  res.render('index', { text: 'some text from server' });
});
