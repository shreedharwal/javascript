//Imediately Invoked Function Expression
//It is a design pattern used to create a new scope 
// for variables, which helps in avoiding variable
// hoisting and polluting the global scope. 

(function one(){// named iife
    console.log(`DB CONNECTED`);    
} )(); //DB CONNECTED


//iife as arrow function
( (name) =>{// unnamed iife
    console.log(`DB connected 2 ${name}`)//DB connected 2
 } )('shreya')

















































