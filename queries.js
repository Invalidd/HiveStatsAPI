const Pool = require('pg').Pool
require('dotenv').config();
const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: 5432,
    ssl: true
});

const all_time = (request, response) => {
    const { uuid } = request.body

    pool.query('SELECT * FROM BP_ALL WHERE UUID = $1', [uuid], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const daily = (request, response) => {
    const { uuid } = request.body

    pool.query('SELECT * FROM BP_DAILY WHERE UUID = $1', [uuid], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const weekly = (request, response) => {
    const { uuid } = request.body

    pool.query('SELECT * FROM BP_WEEKLY WHERE UUID = $1', [uuid], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const monthly = (request, response) => {
    const { uuid } = request.body

    pool.query('SELECT * FROM BP_MONTHLY WHERE UUID = $1', [uuid], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}
module.exports = {
    all_time,
    daily,
    weekly,
    monthly
}