// Create web server
// Import the express library
const express = require('express');
// Create an instance of express
const app = express();
// Import the comments.js file
const comments = require('./comments');
// Create a route that sends the comments array back to the client
app.get('/comments', (req, res) => {
  res.send(comments);
});
// Start the server on port 3001
app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});