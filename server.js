const express = require('express');
const app = express();
const port = 8056;

// Serve static files from the "public" directory
app.use(express.static(__dirname));

// Define routes for your pages
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/author', (req, res) => {
  res.sendFile(__dirname + '/author.html');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});