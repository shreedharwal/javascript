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



















































