/*
   stack--->primitive
   heap---->non-primitive
*/
let myutube="anuragdotcom"
let anothername=myutube
anothername="pipriyadotcom"

console.log(myutube);
console.log(anothername);

let user1={
  email:"anupip@gmail.com",
  upiId:"anu@ybl"
}
let user2=user1
user2.email="pipriya@gmail.com"
console.log(user1);
console.log(user2);