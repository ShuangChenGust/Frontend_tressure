//module() takes 2 parameters - name, dependencies
var myApp = angular.module("myModule",[]);

// myApp.controller("myController". function($scope){

//     var employees = [
//         {firstName:'Sara',lastName:"Chen"}
//     ]

        
//     var countries = [
//         {
//             name:'UK',
//             cities:[
//                 {name:"London"},
//                 {name:"Manchester"},
//                 {name:"Liverpool"}
//             ]
//         },
//         {
//             name:'USA',
//             cities:[
//                 {name:"Houston"},
//                 {name:"Chicago"},
//                 {name:"New York"},
//                 {name:"Washington"}
//             ]
//         }
//     ]

// })
var myAPP = angular
    .module()
var employees = [
    {
        name: "Ben", dateOfBirth: new Date("November 23, 1980"),
        gender: "Male", salary: 55000.788
    },
    {
        name: "Sara", dateOfBirth: new Date("May 05, 1970"),
        gender: "Female", salary: 68000
    },
    {
        name: "Mark", dateOfBirth: new Date("August 15, 1974"),
        gender: "Male", salary: 57000
    },
    {
        name: "Pam", dateOfBirth: new Date("October 27, 1979"),
        gender: "Female", salary: 53000
    },
    {
        name: "Todd", dateOfBirth: new Date("December 30, 1983"),
        gender: "Male", salary: 60000
    }
];