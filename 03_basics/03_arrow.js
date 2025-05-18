const user={
    username:'shreya',
    website:'www:shreya/in',
    price:999,
    welcomemsg: function(){
        console.log(`${this.username}, welcome to website.`);
        console.log(this);
        
    }
}

// user.welcomemsg()
// user.username='shami'
// user.welcomemsg()//here val get changed because of this (current context)

// console.log(this)//{}



// function something(){
//     let username='shreya'
//     console.log(this.username);
// }
// something()//undefined


//Arrow function
// const chai = () => {
//     let username='shreya'
//     console.log(this.username);
// }
// chai()//undefined


// const addtwo= (num1, num2) =>{
//     return num1+num2
// }
// console.log(addtwo(2,5))


//implicit return
//const addtwo= (num1, num2) => num1+num2
// const addtwo= (num1, num2) => (num1+num2)// if used {} then need for return statement , if used () then no use of return statement
// console.log(addtwo(2,5))//7


// const addtwo= (num1, num2) => ({username: 'shreya'}) // should be wrapped in paraenthesis()
// console.log(addtwo(3,6))


































































