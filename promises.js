// fetch Только рабоатет в браузере
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => {
//         console.log(response);
//         return response.json().
//         then()
//     })
//     .then(json => console.log(json))
//     .catch(error => console.log(error.message));
//============================================
import request from 'request'
 import fetch from 'node-fetch'
//
function handleUsers(users) {
    console.log("Printing users");
    console.log(users);
    console.log("Done printing users");
}
//
function getUsersAsyncronously(callbackFunction) {
    setTimeout(function() {
        callbackFunction(
            [
                {
                    id: 1,
                    email: 'george.bluth@reqres.in',
                    first_name: 'George',
                    last_name: 'Bluth',
                    avatar: 'https://reqres.in/img/faces/1-image.jpg'
                },
                {
                    id: 2,
                    email: 'janet.weaver@reqres.in',
                    first_name: 'Janet',
                    last_name: 'Weaver',
                    avatar: 'https://reqres.in/img/faces/2-image.jpg'
                }
            ]
        );
    }, 4000)

//
// function getAndPrintUsersWithRequest() {
//     request(
//         'https://reqres.in/api/users?delay=5',
//         {json: true},
//         function(err, res, body) {
//             handleUsers(body);
//         })
}
//
//
// function getAndPrintUsersWithFetch() {
//     let p;
//
//     let myInterval = setInterval(() => console.log(p), 500);
//
//     p = fetch('https://reqres.in/api/users?delay=2')
//         .then(response => response.json())
//         .then(usersJson => handleUsers(usersJson))
//         .then(() => clearInterval(myInterval))
//         .catch(err => console.error("Error fetching users: " + err));
//
//     console.log(p);
// }
//
function main() {
    console.log("Start");
    console.log("About to get Users");
    getUsersAsyncronously(handleUsers);
    // getAndPrintUsersWithRequest();
    //getAndPrintUsersWithFetch();
    console.log("Done");
}
//
  main();