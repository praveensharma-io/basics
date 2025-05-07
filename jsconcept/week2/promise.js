/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


function wait(n){
    return new Promise((resolve, reject)=>{
        if(n<0){
            reject("n cannot be negative");
        }
        setTimeout(()=>{
            resolve(`Promise resolved after ${n} seconds`);
        }, n*1000);
    });
}

wait(2).then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});

