const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const { Pool } = require("pg");
const cors = require("cors");
require("dotenv").config();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const pool = new Pool({
    // Local host
    // host: "localhost",
    database: "rapusers",
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

//Get database info ↓↓↓↓↓
// app.get("/", async(req, res) => {
//     try {
//         const newUser = await pool.query("SELECT * FROM users");
//         res.status(200).json(newUser.rows);
//     } catch (err) {
//         console.error(err.message);
//     }
// });

app.post("/users", async(req, res) => {
    try {
        const { username, passkey } = req.body;
        const hashedPassword = await bcrypt.hash(passkey, 10);
        const newUser = await pool.query(
            `INSERT INTO users (username, passkey) VALUES ($1,$2) RETURNING *`, [username, hashedPassword]
        );
        res.status(201).json(newUser.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/login/:username/:passkey", async(req, res) => {
    const { username, passkey } = req.params;
    try {
        pool.query(
            "SELECT * FROM users WHERE username = $1", [username],
            async(err, result) => {
                if (await bcrypt.compare(passkey, result.rows[0].passkey)) {
                    res.send("Logged In");
                } else {
                    res.send("Access Denied");
                }
            }
        );
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${process.env.PORT || port}`);
});