//array
//many ways to declare array 
// const myarr= [1,2,3,4,5]
// const myheros=['naagraaj', 'shaktimaan']
// const myarr2=new Array(1,2,3,4)
// console.log(myarr[4])


//Array Methods
const myarr= [1,2,3,4,5]
// myarr.push(6)
// myarr.push(7)
// console.log(myarr)
// myarr.pop()
// console.log(myarr)
// myarr.unshift(9)//[ 9, 1, 2, 3, 4, 5 ]
// myarr.shift()
// console.log(myarr)


// console.log(myarr.includes(9));//gives answer in true/false
//console.log(myarr.indexOf(9));

// const newarr=myarr.join()//change typeof arr to string
// console.log(myarr)
// console.log(newarr);
// console.log(typeof newarr);


//Slice and Splice

console.log('A', myarr)

const myn1= myarr.slice(1,3)//slice returns section of array, the end index is not included, 1 and 3 are indexes

console.log(myn1);
console.log("B",myarr)

const myn2= myarr.splice(1,3)//here original array got manipulated
console.log("C",myarr)//removes (1 to 3) indexed from original array, if we print original arr, it will got manipulated
//only those elements will be selected which are left rather than(1,3)

console.log(myn2);



























