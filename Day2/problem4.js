// Given stored username and password and input username and password, Print if the user can login or not.

let stored_username = "qwerty@123" ;
let stored_password = 909087;
let input_username = "qwerty@123" ;
let input_password = 909077;

if(stored_username==input_username){
  if(stored_password==input_password){
    console.log("can login");
  }else{
    console.log("Incorrect passowrd");
  }
}else {
  console.log("Cannot login");
}
