//for each loop(higher order array loops)
const coding=['js','cpp', 'python','ruby']
// coding.forEach( function (val) {
//     console.log(val);
    
// } )//callback fucntion doesn't have any name


// const coding=['js','cpp', 'python','ruby']
// coding.forEach( (val) => {
//     console.log(val);//using arrow function
// } )


// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index,arr); 
// })
//OUTPUT: js 0 [ 'js', 'cpp', 'python', 'ruby' ]
// cpp 1 [ 'js', 'cpp', 'python', 'ruby' ]
// python 2 [ 'js', 'cpp', 'python', 'ruby' ]
// ruby 3 [ 'js', 'cpp', 'python', 'ruby' ]


const mycoding=[
    {
        langname: 'javascript',
        langfilename:'js'
    },
    {
        langname: 'java',
        langfilename:'java'
    },
    {
        langname: 'python',
        langfilename:'py'
    }
]

mycoding.forEach( (item) => {
    console.log(item.langname);
})




















































































