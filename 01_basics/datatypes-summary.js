// primitive and non primitive (how values are stored and can be accesses)
//primitive datatypes: has 7 categories (no reference given here)
//String 
//Number
//Boolean
//null(empty)
//undefined
//Symbol //datatype: symbol
//BigInt(for very large no)

//reference type or non primitive: has reference in the memory and can be allocated to us
//Array // for reference types the typeof is object for all
//Object
//Functions

// javaScript is a dynamically typed lang,meaning that the type of a variable is not fixed and can change during runtime. 
// const id= Symbol("123")
// const id2= Symbol("123")
// console.log(id== id2); //false
// console.log(id=== id2);//false


// const heros=["shaktiman", 'naagraaj', "doga"] //array

// let obj ={
//     name:"shreya",
//     age:22 //objects
// }


// const Myfunc = function (){
//     console.log("hello"); //datatype: function
// }



//***********************************************************************/
//stack(primitive data types, has copy ) , heap(non primitive data types, has reference)

// let myyt="shreya.com"
// let name2= myyt
// name2="shreyadharwal.com"

// console.log(myyt);
// console.log(name2);


// let userone={
//     email:"shreyadharwal@gmail.com",
//     upi:"user@ghj"
// }

// let usertwo= userone
// usertwo.email= "user@google.com"
// console.log(userone.email);//user@google.com
// console.log(usertwo.email);//user@google.com//because both are in heap,as it is a function


