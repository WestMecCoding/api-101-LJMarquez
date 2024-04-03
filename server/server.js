const express = require('express');
const path = require('path');
const fs = require('fs');
// const cors = require('cors');
const app = express();
// app.use(cors);
const port = 3000;

// root, request, response
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
    // res.send('hello world');
});

app.get('/csv-data', (req, res) => {
    const csvPath = path.join(__dirname, '..', 'data', 'zonal_sea_averages.csv');
    fs.readFile(csvPath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return
        }
        res.type('text/plain');
        res.send(data);
    });
});

app.get('/andrei', (req, res) => {
    res.send('hello andrei');
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});