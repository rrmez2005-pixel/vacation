import express from 'express';

const app = express();
const PORT = 3005;

const orders = [];

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/book', (req, res) => {
    orders.push(req.body);
    console.log(req.body);
    res.redirect('/book.html');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});