// Import the express module
import express from 'express';

const app = express();

const PORT = 3005;

const orders = [];

app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
