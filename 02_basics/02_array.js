
const heros=['thor', 'ironman','spiderman']
const dc_heros=['superman','flash','batman']

// heros.push(dc_heros)
// console.log(heros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(heros[3][1])//flash //3rd index is an array ,if we want to retrive an element from it we will give its indexing 

//console.log(heros.concat(dc_heros))//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//spread operator
// const allheros=[...heros,...dc_heros]//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(allheros);


// const anotherarr= [1, 2, 3,[4, 5, 6], 7, [6, 7, [4, 5]]]
// const realanotherarr= anotherarr.flat(Infinity)
// console.log(realanotherarr);//[1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

//if we want to make a array form another type then
// console.log(Array.isArray("shreya"))// false //asking if it is an array?
// console.log(Array.from("shreya"));// [ 's', 'h', 'r', 'e', 'y', 'a' ] // 'shreya' will got split

//intresting
// console.log(Array.from({name: 'shreya'}));//gives [] ie empty array

//gives array out of this 
let socre1= 100
let score2 =200
let score3 =300
console.log(Array.of(socre1,score3,score2));//[ 100, 300, 200 ]
console.log("shreya")

