function greeting(name){
    return new Promise(function greet(resolve, reject){
        resolve(name);
    })
}
let myPromise = greeting("Abhishek");
myPromise.then((value)=> console.log(`Hello, ${value}!`))
.catch((error) => console.log(error));
