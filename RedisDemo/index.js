const express = require('express');
const fetch = require('node-fetch');
const redis = require('redis');

const PORT = 5000;
const REDIS_PORT = 6379;

const client = redis.createClient(REDIS_PORT);

const app = express();

// set response
function setResponse(username, repos){
    return `<h2>${username} has ${ repos } Github repos <h2>`
}

// make request to the github for repos;
//Redis server;
async function getRepos(req, res, next){
    try{
        console.log("fetching data");
        const { username } = req.params;
        const response = await fetch(`https://api.github.com/users/${username}`);

        const data = await response.json();
        // fetching the website
        // res.send(data);
        const repos = data.public_repos;

        client.setex(username, 5, repos);
        res.send(setResponse(username, repos));
    }catch(err){
        console.log('err')
    }
}

function cache(req, res, next){
    const { username } = req.params

    client.get(username, (err, data) => {
        if(err) throw err;

        if(data !== null){
            res.send(setResponse(username, data));
        }else{
            next();
        }
    })
}


app.get('/repos/:username', cache, getRepos);

app.listen(PORT, ()=>{
    console.log('App listening at port :5000');
});

