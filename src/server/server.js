const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const port = 3000;

app.use(express.json());

const pool = new Pool({
    database: 'rapusers',
    ssl: {
        rejectUnauthorized: false,
    },
});

app.get('/', (req, res) => {
    pool.query('SELECT * FROM users;', async(err, result) => {
        res.send(result);
        if (await bcrypt.compare(passkey, result.rows[0].passkey)) {
            console.log('success');
            res.send("Success");
        } else {
            console.log('access denied')
            res.send("denied");
        }
    })
})

app.get('/login/:username/:password', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})