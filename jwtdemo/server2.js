require('dotenv').config();
console.log('hi');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

const posts = [
    {
        username:'Kyle',
        title:'Post 3'
    },
    {
        username:'Jim',
        title:'Post 4'
    }
]

function generateAccessToken(user){
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET, {expiresIn: '25s'});
}


//router
app.post('/login', (req, res) =>{
    //authorize user
    const username = req.body.username
    //authorize and serialze the username
    const user = { name:username}
    //to serialize we need a key
    
    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFER_TOKEN_SECRET);
    res.json({accessToken: accessToken, refreshToken: refreshToken});

})

app.post('/token', (req, res)=>{
    const refreshToken = req.body.Token

    if(refreshToken == null ) return res.sendStatus(401);
    if(!refreshToken.includes(refreshToken)) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFER_TOKEN_SECRET, (err, user) =>{
        if(err) return res.sendStatus(403)
        const accessToken = generateAccessToken({name: user.name})
        res.json({accessToken: accessToken})
    })
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


app.get('/posts', authenticateToken, (req, res) => { 
    res.json(posts.filter(posts => posts.username === req.user.name))
    // res.json(posts)
})

app.listen(4000);