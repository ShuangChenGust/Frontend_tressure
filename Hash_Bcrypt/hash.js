const bcrypt = require('bcrypt')

let saltRounds = 10
let myString = 'helloworld'

bcrypt.hash(myString, saltRounds, (err, hash)=>{
    if(!err){
        console.log(hash)
    }else{
        console.log('error: ', err)
    }
})

// bcrypt.compare('myString', '$2b$10$5lFQaDd1hKgj3I7hvJSlLOxC4p0xcuqTEWoRJi.CZhCbuUMkvEA66', (err, res) => {
//     if(!err){
//         console.log('correct', res)
//     }
//     else{
//         console.log('errors', err)
//     }
// })