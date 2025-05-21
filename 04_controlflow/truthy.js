// const userEmail='dfgh@.com' // assuming that userEmail value is true, if empty string then else will print
// if(userEmail){
//     console.log("got user email")
// }else{
//     console.log("don't has email");
// }


//All falsy value
//false, 0(falsy val), -0, bigInt 0n, '', null, NaN

//All Truthy vals
// "0", 'false', ' ', [], {}, function(){}


// const userEmail=[]
// if(userEmail.length === 0){
//     console.log('array is empty');
// }


// const emptyobj={}
// if(Object.keys(emptyobj.length === 0)){
//     console.log('object is empty')//object is empty
// }


//nullish coalescence operator(??): null Undefined
// let val1;
// let val2;
// val1 = 5 ?? 10
// console.log(val1)//5

// val2 = null ?? 10
// console.log(val2)//10

// val1 =undefined ?? 15
// console.log(val1)// 15

// val1 = null ?? 10 ?? 20// the first num val is assigned
// console.log(val1)//10



//Terniary operator
// condition ? true : false
const iceTeaPrice= 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")











