const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const { Pool } = require("pg");
const port = 4000;

app.use(express.json());

const pool = new Pool({
    // Local host
    host: "localhost",
    database: "rapusers",
    //Deployment
    //   connectionString: process.env.DATABASE_URL,
    //   ssl: {
    //     rejectUnauthorized: false,
    //   },
});

//Get database info ↓↓↓↓↓
app.get("/", async(req, res) => {
    try {
        const newUser = await pool.query("SELECT * FROM users");
        res.status(200).json(newUser.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/login", (req, res) => {
    pool.query("SELECT * FROM users;", async(err, result) => {
        res.send(result);
        // if (await bcrypt.compare(passkey, result.rows[0].passkey)) {
        //     console.log('success');
        //     res.send("Success");
        // } else {
        //     console.log('access denied')
        //     res.send("denied");
        // }
    });
});

app.get("/login/:username/:passkey", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});