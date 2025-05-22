//reduce

const mynum=[1,2,3]

// const myTotal= mynum.reduce( function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// },3 )
// console.log(myTotal);


// const myTotal = mynum.reduce( (acc, currval) => acc + currval, 0 )
// console.log(myTotal);


const shoppingcart= [
    {
        itemname:'jscourse',
        price: 2999
    },
    {
        itemname:'pycourse',
        price: 999
    },
    {
        itemname:'mobdev',
        price: 27999
    },
    {
        itemname:'datascience',
        price: 28999
    }
]
const pricetopay=shoppingcart.reduce( (acc,item) => acc + item.price ,0)
console.log(pricetopay);


















































