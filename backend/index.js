const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();
app.use(express.json());
const port = 5000;

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

const origami = [
    {
        name: "Swan",
        price: 20,
        description: "A beautiful Swan Orgami crafted from our high quallity Boguso paper.",
    },
    {
        name: "Dog",
        price: 15,
        description: "A beautiful Dog Orgami crafted from our high quallity Tolio paper.",
    }
];



app.post('/login',(req,res) => {
    const username = req.body.username;
    const user = { name: username }
    const accessToken = jwt.sign(user,ACCESS_TOKEN_SECRET)
    res.json({accessToken: accessToken})
});

function authenticateToken(req,res, next){
    const authHeader = res.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, ACCESS_TOKEN_SECRET , (err , user) => {
        if(err) return res.sendStatus(403);

        req.user = user;
        next()
    });
}

app.get('/api/products/',(req,res) => {
    res.send(origami);
});


app.listen(port,() => {
    console.log("Server started at http://localhost:5000");
});