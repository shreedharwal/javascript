// const promiseOne= new Promise(function(resolve, reject){
//     //do async tasks
//     //dbCalls, cryptography, network calls
//     setTimeout(function(){
//         console.log('Async task is complete')
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
    
// }) //connection with resolve


//another way to make promise
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 resolved");
    
// })


// const promisethree= new Promise(function(resolve,reject){
// setTimeout(function(){
//     resolve({username:"shreya", email:'shreyadharwal@gmail.com'})
// },1000)
// })

// promisethree.then(function(user){
//     console.log(user)
// })


const promiseFour= new Promise( function(resolve,reject){
    setTimeout(function(){
        let error= true
        if(!error){
            resolve({username:"shreya", email:'shreyadharwal@gmail.com'})
        }else{
            reject("ERROR: Something Went Wrong")
        }
    },1000)
})

const username= promiseFour.then( (user) => {
    console.log(user);
    return user.username
    //callback hell
})
console.log(username);

//to be continued from here























































