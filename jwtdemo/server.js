require('dotenv').config();
console.log('hi');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

const posts = [
    {
        username:'Kyle',
        title:'Post 1'
    },
    {
        username:'Joy',
        title:'Post 2'
    }
]

app.get('/posts', (req, res) => { 
    res.json(posts)
})

//router
app.post('/login', (req, res) =>{
    //authorize user
    const username = req.body.username
    //authorize and serialze the username
    const user = { name:username}
    //to serialize we need a key
    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)//expiration value
    res.json({accessToken: accessToken})
})


app.listen(3000);