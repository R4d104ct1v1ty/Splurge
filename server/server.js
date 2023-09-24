const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000
app.use(express.json());

app.listen(port, (req, res)=> {
    console.log(`Server listening to port ${port}`)
})