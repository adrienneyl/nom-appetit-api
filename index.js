require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const restaurantModel = require("./models");

const app = express();
const port = 3001;

app.use(cors());

mongoose.connect(process.env.DATABASE_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/details', async (req, res) => {
    const user = await restaurantModel.find({});
    res.send(user);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))