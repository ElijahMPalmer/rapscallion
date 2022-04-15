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

app.post("/users", async(req, res) => {
    try {
        const { first_name, last_name, username, passkey } = req.body;
        const newUser = await pool.query(
            `INSERT INTO users (first_name, last_name, username, passkey) VALUES ($1,$2,$3,$4) RETURNING *`, [first_name, last_name, username, passkey]
        );
        res.status(201).json(newUser.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


app.delete("/users/:id?", async(req, res) => {
    try {
        const id = req.params.id;
        const newQuiz = await pool.query(
            "DELETE from users WHERE users_id = $1 RETURNING *", [id]
        );
        res.status(200).json(newQuiz.rows);
    } catch (err) {
        console.error(err.message);
    }
});
app.get("/login/:username/:passkey", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});