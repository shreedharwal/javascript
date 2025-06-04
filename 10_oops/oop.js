// object literals

const user={
    username:'shreya',
    loginCount:8,
    signedIN:false,

    getUserDetails: function(){
        // console.log("got user details from db");
        // console.log(`username: ${this.username}`);
        //console.log(this);// gives current context
            
    }
}
// console.log(user.username);
//console.log(user.getUserDetails());
// console.log(this);//global context always changes


//Constructor function(new keyword- to create multiple instances)

function User(username, loginCount, isLoggedin){
    this.username = username
    this.loginCount=loginCount
    this.isLoggedin=isLoggedin

    this.greeting= function(){
        console.log(`welcome: ${this.username}`);
        
    }

}

const userOne= new User("shreya", 1, true)
const userTwo= new User("somi", 2,false)
console.log(userTwo.constructor);//[Function: User]
// console.log(userTwo)
// console.log(userOne);

// new keyword - Empty object is created also known as instance{}
// Constructor function is called through new keyword
// All the arguments got injected in the new keyword
// got all the values



































































































