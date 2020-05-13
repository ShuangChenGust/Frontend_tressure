// const promise = new Promise((resolve, reject) =>{
//     // throw 'really bad'
//     resolve('good')
// })
// .then((result)=>{
//     console.log(result)
//     return 1
// })

// .then((result)=>{
//     console.log(result)
//     return 2
// })
// .then((result)=>{
//     console.log(result)
//     return 3
// })
// .then((result)=>{
//     console.log(result)
//     return 4
// })
// .catch(err => {
//     console.log(err)
// })

// const fs = require('fs');

// fs.readFile('data.txt', (err, data)=>{
//     console.log(data)
// })

// new Promise((resolve, reject)=>{
//     fs.readFile('data.txt', (err, data) =>{
//         if(err)
//             reject(err)
//         else
//             resolve(data)
//     })
// })
// .then((result)=>{
//     console.log(result.toString())
// })
// .catch((err)=>{
//     console.log(err)
// })

// //using promisfy 
// const util = require('util')
// var read = util.promisify(fs.readFile);

// read('data.txt')
// .then((data)=>{
//     console.log(data.toString())
// })
const fs = require('fs');
const util = require('util');

var read = util.promisify(fs.readFile);

Promise
    .all([
        read('data1.txt'),
        read('data2.txt')
    ])
    .then( data => {
        const [data1, data2] = data
        console.log(data1.toString())
        console.log("====")
        console.log(data2.toString())
    })