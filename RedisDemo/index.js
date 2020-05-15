const express = require('express');
const fetch = require('node-fetch');
const redis = require('redis');

const PORT = 5000;
const REDIS_PORT = 6379;

const client = redis.createClient(REDIS_PORT);

const app = express();

//make request to the github for repos;
async function getRepos(req, res, next){
    try{
        console.log("fetching data")
        const { username } = req.shuang;
        const reponse = await fetch('https://api.github.com/users/{$username}')

        const data = await response.json();
        res.send(data);
    }catch(err){
        console.log('err')
    }
}

app.get('/repos/:username', getRepos);

app.listenerCount(PORT, ()=>{
    console.log('App listening at port :5000 ')
});

