//let var const
//dont use var


// let a= 10
// const b=20
// var c=30
// console.log(a)
// console.log(b)
// console.log(c)

// let a =300
// if(true){
//     let a=10
//     const b=20
//     var c=30
// }
// // console.log(a);//gives error
// // console.log(b);//error
// console.log(c);// 30//here it is printed


//global scope
// let a =300
// //block scope
// if(true){
//     let a=10
//     const b=20
//     console.log('INNER:', a)
// }
// console.log(a);


// function one(){
//     const username='shreya'

//     function two(){
//         const website='youtube'
//         console.log(username)
//     }
//     //console.log(website)//error because it is out of scope
//     two()
// }

// one()


if(true){
    const username='shreya'
    if(username==='shreya'){
        const website=' youtube'
        // console.log(username+website)
    }
    // console.log((website));//error because outside of scope
    
}
// console.log(username);//error because outside of scope


//*******************INTERESTING***********************************
// console.log(addone(5))
// function addone(num){
//     return num+1
// }
// console.log(addone(5))


addtwo(5)//error because he is not able to find addtwo
const addtwo= function(num){//function// hoisting 
    return num+2
}

// addtwo(5)


















































