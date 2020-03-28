const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./queries');
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

//  apply to all requests
app.use(limiter);

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});
app.post('/all', db.all_time);
app.post('/daily', db.daily);
app.post('/weekly', db.weekly);
app.post('/monthly', db.monthly);



