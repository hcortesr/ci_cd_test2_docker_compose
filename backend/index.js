import express from 'express'
import './server.js'
import { getClubs } from './server.js';

const app = express();
const PORT = 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/data', async (req, res) => {
    await getClubs();
    res.send("The query should have worked.");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
