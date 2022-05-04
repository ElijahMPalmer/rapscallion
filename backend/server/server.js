const express = require("express");
const bcrypt = require("bcrypt");
const { Pool } = require("pg");
const cors = require("cors");
require("dotenv").config();
const port = 4000;




const pool = new Pool({
    // Local host
    // host: "localhost",
    database: "rapusers",
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});


//Get database info↓↓↓↓↓
const createServer = (pool) => {

    const app = express();
    app.get("/", async(req, res) => {
        try {
            const newUser = await pool.query("SELECT * FROM users");
            res.status(200).json(newUser.rows);
        } catch (err) {
            console.error(err.message);
        }
    });
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('../../build'));

    app.post("/users", async(req, res) => {
        try {
            const { username, passkey } = req.body;
            const hashedPassword = await bcrypt.hash(passkey, 10);
            const newUser = await pool.query(
                `INSERT INTO users (username, passkey) VALUES ($1,$2) RETURNING *`, [username, hashedPassword]
            );
            res.status(201).json(newUser.rows[0]);
        } catch (err) {
            res.status(400);
            console.error(err.message);
        }
    });

    app.get("/login/:username/:passkey", async(req, res) => {
        const { username, passkey } = req.params;
        try {
            const result = await pool.query(
                "SELECT * FROM users WHERE username = $1", [username],

            );
            if (!result.rows[0]) {
                res.send('no result');
            } else if (await bcrypt.compare(passkey, result.rows[0].passkey)) {
                res.send("Logged In");
            } else {
                res.send("no result");
            }
        } catch (err) {
            console.error(err.message);
        }
    });

    app.listen(process.env.PORT || port, () => {
        //console.log(`Example app listening on port ${process.env.PORT || port}`);
    });
    return app;

}

createServer(pool);
module.exports = createServer;