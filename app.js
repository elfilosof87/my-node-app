const express = require('express');
const app = express();
const axios = require('axios');

app.get('/', (req, res) => {
  res.send('Hello, World! Estate glance welcomes you!');
});

app.get('/users', async (req, res) => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    const users = response.data;
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch data from the API' });
  }
});


app.get('/pokemon', async (req, res) => {
  try {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=100'
    );
    const pokemon = response.data;
    console.log(pokemon)
    console.log("------------------------")
    res.sendFile(__dirname + '/pages/pokemon.html', { pokemon });
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch data from the API' });
  }
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
