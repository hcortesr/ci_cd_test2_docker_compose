import express from 'express'
import './server.js'
import { getClubs, postClub } from './server.js';

const app = express();
const PORT = 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/data', async (req, res) => {
    const clubs = await getClubs();
    res.json(clubs);
});
app.post('/set', async (req, res) => {
    await postClub("asdf, ", "dsvvv", 39889);
    res.send("It was edited.");
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
