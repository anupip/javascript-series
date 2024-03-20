Object.create // use to create object by constructor , singelton

//object literals

const mysym = Symbol("key1")
const jsuser={
  [mysym]:"mykey1",//syntax to declare symbol
  name:"anurag",
  age:"18",
  location:"delhi",
  email:"anurag@gmail.com",
  isLoggedIn:"false",
  lastLoggedIn:["monday","saturday"]
}
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser[mysym]);
// Object.freeze(jsuser) avoid changes in object
console.log(jsuser);

//FUNCTIONS
//this function helps in accessing the properties of the objects
jsuser.greeting=function(){
  console.log("hello js user");
}
jsuser.greetingtwo=function(){
  console.log(`hello js user, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());