import request from 'request';
import fetch from 'node-fetch';

// const promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         if (true) {
//             resolve('promise completed');
//         } else {
//             reject();
//         }
//     }, 2000);
//
// });
// promise
//     .then(data => console.log(data))
//     .catch(() => console.log('error'));

function printUsers(users) {
    console.log("Printing users");
    console.log(users);
    console.log("Done printing users");
}
//=====promise
function getAndPrintUsersWithFetch() {
let p;
p = fetch('https://reqres.in/api/users?delay=2')
    .then(response => response.json())
    .then(usersJson => handleUsers(usersJson))
    .catch(err => console.log('error'));

}
// getAndPrintUsersWithFetch();
async function getAndPrintUsersWithFetch1() {
    try {
       // мы делаем запрос, await не пускает исполнятся код дальше, пока промис не завершится
        let response = await fetch('https://reqres.in/api/users?delay=5');
        // конвертируем ответ, await не пускает исполнятся код дальше, пока промис не завершится
        response = await request.json();
        // дальше уже обычный синхронный код
        printUsers(response);
    } catch {
        /* Для того, чтобы в async/await обработать ошибки,
        основной действие надо оборачивать в try, и отлавливать ошибку в catch */
        console.log('error');
    }
}

await getAndPrintUsersWithFetch1();



