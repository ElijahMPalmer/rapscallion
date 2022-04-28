const createServer = require('../server.js');
const supertest = require("supertest");
const { Pool } = require("pg");

const pool = new Pool({
    // Local host
    // host: "localhost",
    database: "rapusers",
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});


const server = createServer(pool);

afterAll(() => {
    pool.end();
});


test("responds to /", async() => {
    const response = await supertest(server)
        .get("/")
        .expect(200);
    expect(response.body).toEqual(expect.arrayContaining([{ "passkey": "Doggie", "username": "King123", "users_id": 1 }]))
});

test("responds to /users", async() => {
    const response = await supertest(server)
        .post("/users")
        .send({ username: 'testCase', passkey: 'testPassKey' })
        .set('Accept', 'application/json')
        .expect(201);
    expect(response.body).toEqual(expect.objectContaining({ username: "testCase" }))
});
test("responds to /login/:username/:passkey", async() => {
    const response = await supertest(server)
        .get("/login/testCase/testPassKey")
    expect(response.text).toMatch('Logged In')
});