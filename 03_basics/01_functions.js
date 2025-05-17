function myname(){
    console.log('s');
    console.log('h');
    console.log('r');
    console.log('e');
    console.log('y');
    console.log('a');
}

//myname //reference
//myname()//function calling


// function add(num1, num2){//parameters
//     console.log(num1+num2)
// }

// add(2,7)// arguments


function add(num1, num2){//parameters
    //  let result= (num1+num2)
    //  return result
    return num1+num2
 }

const result=add(2,7)
// console.log('result:', result);//result: 9


function loginusermsg(username='sam'){//given default value
    if (username === undefined){// if(!username){}
        console.log('plz enter username');
        return
         }
    return `${username} just logged in!!`
}

// console.log(loginusermsg('shreya'))

// console.log(loginusermsg()) //undefined


function calculatecarPrice(...num1){//rest spread operator
    return num1
}
//console.log(calculatecarPrice(200,400,500));//[ 200, 400, 500 ]

const user={
    username:'shreya',
    item:'bag',
    price:199
}

function handleObject(anyObj){
    console.log(`username is ${anyObj.username} and price of bag is ${anyObj.price}`);
  }
// handleObject(user)
//another way without making object
// handleObject({
//     username:'sam',
//     price:399
// })//username is sam and price of bag is 399


const mynewarr=[200,456,4567,678]
function returnsecval(getarr){
    return getarr[1]
}
// console.log(returnsecval(mynewarr))//456

//passing an array without declaration 
// console.log(returnsecval([200,456,4567,678]))//456



































