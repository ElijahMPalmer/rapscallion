const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})