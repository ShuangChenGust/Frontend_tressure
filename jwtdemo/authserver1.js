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

app.get('/posts', authenticateToken, (req, res) => { 
    res.json(posts.filter(posts => posts.username === req.user.name))
    // res.json(posts)
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

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
        if(err) return res.sendStatus(403)

        req.user = user
        next()
    })
}

app.listen(3000);