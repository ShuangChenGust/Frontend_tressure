// // const fetch = require("node-fetch");
fetch("https://reqres.in/api/users", {
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        name:"user1"
    })
}).then(res => {
    return res.json()
})
  .then(data => console.log(data))
  .catch(error => console.log(error))


// fetch("https://reqres.in/api/users")
//   .then(res => console.log(res))