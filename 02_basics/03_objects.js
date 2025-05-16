//two ways to declare objects

//constructor=> singleton
//Object.create

//object literals

const mysym=Symbol("key1")

const jsuser= {
    name: 'shreya',
    'full name': 'Shreya Dharwal',
    [mysym]: "mykey1",
    age: 20,
    loc: 'delhi',
    email: 'shreya.com',
    isLoggedIN: false,
    lastloggesin :['monday',' saturday']
    }

// console.log(jsuser.email);
// console.log(jsuser['email']);

//trying to access using the dot method
// console.log(jsuser.full name);//will give error , best way to access it by 
// console.log(jsuser['full name']);
// console.log(typeof mysym);//Symbol
// console.log(typeof jsuser[mysym]);//string

//changing the values
// jsuser.email= 'shreyadharwal@gmail.com'
// Object.freeze(jsuser)//means nobody can change anything 
// jsuser.email= 'shreyadharvbwal@gmail.com'
//console.log(jsuser);//no change because of freez 

//declaring functions in jsuser
// jsuser.greeting= function () {
//     console.log('Hello to jsuser');
//     }
//console.log(jsuser.greeting());

jsuser.greetingtwo= function () {
    console.log(`Hello to jsuser,${this.name}`);
    }
console.log(jsuser.greetingtwo());



































































