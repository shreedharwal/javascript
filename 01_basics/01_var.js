const accountId= 14423
let accountEmail='shreyadharwal@gmail.com'
var accountPassowed='12345'
accountCity= "jaipur"

// accountId= 2 //not allowed
accountEmail="hc@gmail.com"
accountPassowed='2345'
accountCity="delhi"
let accountState;

console.log(accountId);
/*prefer not to use var because of issue in block scope and functional scope */

console.table([accountId,accountEmail, accountPassowed,accountCity, accountState])