//singleton 
//two ways to declare a object
// const tinderuser= new Object()//singleton object
const tinderuser={}//non singleton object

tinderuser.id='abc'
tinderuser.name='sammi'
tinderuser.isLoggedIn=false

//console.log(tinderuser)


const regularuser={
    email:'some@gmail.com',
    fullname:{
        userfullname:{
            firstname: 'shreya',
            lastname:' dharwal'
        }
    }
}

//console.log(regularuser.fullname.userfullname.firstname)

const obj1= {1:'a',2:'b'}
const obj2= {3:'a',4:'b'}
const obj3= {4:'a',5:'b'}

// const obj4= Object.assign(obj1,obj2)
// console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//good to take {} empty array
// const obj4= Object.assign({},obj1,obj2,obj3)
// const obj4={...obj1,...obj2,...obj3}
// console.log(obj4)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'a', '5': 'b' }


//when values comes from database
const users=[
    {
        id:1,
        email:'fghj.com'
    },
     {
        id:2,
        email:'fghj.com'
    },
     {
        id:3,
        email:'fghj.com'
    }
]

// users[1].email
// console.log(Object.keys(tinderuser))//[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderuser))//[ 'abc', 'sammi', false ]
// //keyval is converted to a seprate array
// console.log(Object.entries(tinderuser))//[ [ 'id', 'abc' ], [ 'name', 'sammi' ], [ 'isLoggedIn', false ] ]


// console.log(tinderuser.hasOwnProperty('isLoggedIn'));//true
//console.log(tinderuser.hasOwnProperty('isLogged'))//false

const course={
    coursename:'js in hindi',
    price:'999',
    courseteacher:'shreya'
}

//course.courseteacher // this is one method

// const {courseteacher: teacher}= course//can give created name to courseteacher
// // console.log(courseteacher);
// console.log(teacher)


