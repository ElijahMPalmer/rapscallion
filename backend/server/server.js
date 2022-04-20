const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const { Pool } = require("pg");
const cors = require("cors");
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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

// app.get("/login", (req, res) => {
//     pool.query("SELECT * FROM users;", async(err, result) => {
//         res.send(result);
//         // if (await bcrypt.compare(passkey, result.rows[0].passkey)) {
//         //     console.log('success');
//         //     res.send("Success");
//         // } else {
//         //     console.log('access denied')
//         //     res.send("denied");
//         // }
//     });
// });

app.post("/users", async(req, res) => {
    try {
        const { username, passkey } = req.body;
        const hashedPassword = await bcrypt.hash(passkey, 10)
        const newUser = await pool.query(
            `INSERT INTO users (username, passkey) VALUES ($1,$2) RETURNING *`, [username, hashedPassword]
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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

//dummy
app.get("/login/:username/:passkey", async(req, res) => {
    const { username, passkey } = req.params
    try {
        pool.query('SELECT * FROM users WHERE username = $1', [username], async(err, result) => {
            if (await bcrypt.compare(passkey, result.rows[0].passkey)) {
                console.log('Logged In')
            } else {
                console.log('Access Denied')
            }


        })
    } catch {

    }

})