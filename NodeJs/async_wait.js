// function a(){
//     return Promise.resolve('a')
// }
// async function b(){
//     return Promise.resolve('a')
// }
// async function c(){
//     return ('c')//implied promise
// }

// console.log(a())

// console.log(b())

// console.log(c())
const fs = require('fs');
const util = require('util');
const read = util.promisify(fs.readFile);

// //try out
// var run = async () => {
//     //promise
//     read('data1.txt')
//         .then(data => {
//             console.log(data.toString())
//         })

//     //async /await
//     try{
//         const data = await read('data1.txt')
//         console.log(data.toString())
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// run();

var run = async ()=>{
    Promise
        .all([
            read('data1.txt'),
            read('data2.txt')
        ])
        .then(data => {
            const [data1, data2] = data;
            console.log(data.toString())
        })
}

run();