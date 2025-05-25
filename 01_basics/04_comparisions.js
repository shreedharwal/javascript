// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

// console.log("2" > 1)
// console.log("02">1) //true for both

// console.log(null > 0 )//false
// console.log(null ==0 )//false
// console.log(null >=0 )//true // null got converted to 0 hence 0 >= 0 is true
//reason is that an equality check == and comparision > < >= <= works differently
//comparison convert null to number, treating it as 0, thats why (3)null >= 0 is true and (1)null > 0 is false

// console.log(undefined == 0); //false
// console.log(undefined > 0); //false
// console.log(undefined < 0); //false


// console.log(undefined== NaN); //false
// console.log(undefined > NaN); //false
// console.log(undefined < NaN); //false

// console.log("2" == 2); // true , here conversion starts 
// // strict check
// console.log("2" === 2); // false, but here no conversion it checks datatypes also
