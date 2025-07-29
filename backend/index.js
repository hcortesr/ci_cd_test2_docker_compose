import express from 'express'
import './server.js'
import { getClubs, postClub } from './server.js';
import cors from 'cors';

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.urlencoded())
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/data', async (req, res) => {
    const clubs = await getClubs();
    res.json(clubs);
});
app.post('/set', async (req, res) => {
  const data = req.body;
  await postClub(data.name, data.city, data.year);
  res.send("It was edited.");
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
