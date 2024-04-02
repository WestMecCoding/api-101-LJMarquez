const express = require('express');
const app = express();
const port = 3000;

// root, request, response
app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/andrei', (req, res) => {
    res.send('hello andrei');
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});