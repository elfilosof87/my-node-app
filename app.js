const express = require('express');
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route for '/about'
app.get('/about', (req, res) => {
  res.send('About Us');
});

// Define a route with a dynamic parameter
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User Profile for ID ${userId}`);
});

// Define a route for POST requests
app.post('/create', (req, res) => {
  // Handle creating a new resource
  res.send('Resource created successfully');
});

// Define a route for PUT requests
app.put('/update/:id', (req, res) => {
  const resourceId = req.params.id;
  // Handle updating the resource with the given ID
  res.send(`Resource with ID ${resourceId} updated`);
});

// Define a route for DELETE requests
app.delete('/delete/:id', (req, res) => {
  const resourceId = req.params.id;
  // Handle deleting the resource with the given ID
  res.send(`Resource with ID ${resourceId} deleted`);
});

// Start the server on port 8080
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
