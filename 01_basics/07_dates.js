//Dates
// let Mydate= new Date()
// console.log(Mydate);//2025-05-15T16:46:45.355Z
// console.log(Mydate.toString());//Thu May 15 2025 16:47:01 GMT+0000 (Coordinated Universal Time)
// console.log(Mydate.toDateString());//Thu May 15 2025
// console.log(Mydate.toISOString());//2025-05-15T16:46:09.962Z
//console.log(Mydate.toJSON());//2025-05-15T16:47:33.958Z
// console.log(Mydate.toLocaleTimeString())// 4:48:38 PM
// console.log(Mydate.toLocaleString())// 5/15/2025, 4:48:38 PM

// console.log(typeof(Mydate));// object

//to declare a my created date
// let mycreatedDate= new Date(2025,5,2)//months starts form 0
// console.log(mycreatedDate.toDateString());


// let mycreatedDate= new Date(2025,5,2,6,8)//6/2/2025, 6:08:00 AM
// console.log(mycreatedDate.toLocaleString());


// let mycreatedDate= new Date("2025-01-15")// for specific date and time 
// let mycreatedDate= new Date("15-01-2025")// in india we prefer dd-mm-yy
// console.log(mycreatedDate.toLocaleString());//1/15/2025, 12:00:00 AM

//TimeStamps
//let mytimestamp= Date.now()
//console.log(mytimestamp);

// let mytimestamp= Date.now()
// console.log(Math.floor(Date.now()/1000));

let NewDate= new Date()
// console.log(NewDate.getMonth());
// console.log(NewDate.getDay());
// console.log(NewDate.getFullYear());

NewDate.toLocaleString('default', {
    weekday:'long'
})































