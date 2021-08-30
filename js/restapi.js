const express = require("express");
const cors = require("cors");

const app = express();
const routes = require('./api_routes.js');
app.use(cors());
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('<h1>Hi</h1>');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server is running");
})