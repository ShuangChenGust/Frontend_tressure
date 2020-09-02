

var getPosts = function() {
  return fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => console.log(posts))
} ();

console.log(getPosts);

//use fetch to get data.
let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url);

let commits = await response.json(); // read response body and parse as JSON

alert(commits[0].author.login);


//pure promise function:
fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login));