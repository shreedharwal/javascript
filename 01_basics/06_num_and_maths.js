// const score= 400
// console.log(score);

// const balance= new Number(100)
// console.log(balance);

// console.log(typeof(balance.toString()))
// console.log(balance.toString().length)
// console.log(balance.toFixed(2));//it fix the number upto 2 decimal places


// const otherNum= 23.432
// console.log(otherNum.toPrecision(3));//Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

// const hundred=1000000003456789
// console.log(hundred.toLocaleString());//adds comas for very large numbers
//default is in US standard ..can convert to indian value also
// console.log(hundred.toLocaleString('en-IN'))



//*********************MATHS*******************************

//only the minus values became positive with absolute
// console.log(Math.abs(-4));

// console.log(Math.round(4.3));
// console.log(Math.ceil(4.7));// give top value after roundoff
// console.log(Math.floor(4.7));//give lowest value after roundoff

// console.log(Math.min(3,6,7,8,9))//finds out minimum val same for max

// console.log(Math.random());//gives value between 0 and 1
// console.log((Math.random()*100)+1);//for getting values above 0 and 1

//to avoid getting 0 and getting a number in range of min and max
const min=10
const max=20
console.log(Math.floor(Math.random() * (max - min +1)) + min)


















































