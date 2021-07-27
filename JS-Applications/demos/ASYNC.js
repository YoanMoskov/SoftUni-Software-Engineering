let promise = new Promise(((resolve, reject) => {
    if () { //condition is true
        resolve()
    } else {//condition is false
        reject()
    }
}));
promise
    .then(function (res) {//we get the response if resolved from the promise and we can use them

    })
    .catch(function (err) {//we get this if rejected and use the data

    })
    .finally(function () {//it is executed no matter if the promise is resolved or rejected

    });

//Chaining promises
promise
    .then()
    .then()
    .then()
    .catch();

let promise = fetch('url')
promise
    .then((res) => {
        //use response
        return res.json();//returns new promise
    })
    .then(data => {
        //use data of the new promise
    })
    .catch(err => {
        //use err
    });

//Promise methods
Promise.reject()//Returns an object that is rejected with the given reason
Promise.resolve()//Returns an object that is resolved with the given value
Promise.all([promises])//Returns a promise
// -> fulfills when all the promises have fulfilled
// -> rejects as soon as one of them is rejected

Promise.allSettled([promises])//Wait until all promises have settled
Promise.race([promises])//Returns a promise as soon as one of the promises is settled

//Simplified Promises
    //Returns promise
async function f() {

}
let someFunc = async function(){

}

async function getSwName(id){
    let characterResponse = await fetch(`https://swapi.dev/api/people/${id}`);
    let character = await characterResponse.json();

    let starshipResponse = await fetch(character.starships[0]);
    let starship = await starshipResponse.json();

    return `${character.name} - ${starship.name}`;
}
getSwName(4)
    .then(name => console.log(name))//if successfull this block of code will be executed
    .catch(err => {//if it throws this block of code will be executed
        console.log(err)
    })

//PROMISE THEN VS ASYNC/AWAIT
//PROMISE THEN
function logFetch(url) {
    return fetch(url)
        .then(response => {
            return response.text()
        })
        .then(text => {
            console.log(text);
        })
        .catch(err => {
            console.error(err);
        });
}
//ASYNC/AWAIT
async function logFetch(url) {
    try {
        const response =
            await fetch(url);
        console.log(
            await response.text()
        );
    }
    catch (err) {
        console.log(err);
    }
}
//Sequential execution
async function getSwName(id){
    let responsePromise = fetch(`https://swapi.dev/api/people/${id}`);
    let starshipResponsePromise = fetch(character.starships[0]);

    let response = await responsePromise;
    let starshipResponse = await starshipResponsePromise;

    let character = await response.json();
    let starship = await starshipResponse.json();

    return `${character.name} - ${starship.name}`;
}
getSwName(4)
    .then(name => console.log(name))//if successfull this block of code will be executed
    .catch(err => {//if it throws this block of code will be executed
        console.log(err)
    })



