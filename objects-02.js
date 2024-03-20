// const tinderuser = new Object() ..............this is singleton object
const tinderuser = {};
// above both lines are same
tinderuser.id = "123abc";
tinderuser.name = "anurag";
tinderuser.isLoggedIn = false;

console.log(tinderuser);
console.log(Object.keys(tinderuser)); //gives array of keys so we can loop through
console.log(Object.values(tinderuser));
console.log(tinderuser.hasOwnProperty('name'));

const regularuser ={
   email:"anurag@gmail.com",
   fullname : {
    firstname:"Anurag",
    lastname:"Pipriya"
   }
}
console.log(regularuser.fullname.lastname);

//to combine two or more objects 
const anu = {a:"1",b:"2",c:"3"}
const pip = {d:"4",e:"5",f:"6"}
const  rag = Object.assign({},anu,pip)
//anu is target and pip is source in case of 2 objects
//but in case of many objects we use {} as target to store all keys and values
//in conclusion, first parameter will store whole added objects
console.log(rag);
//or we can spreads objects in obj3 ,, glass pkdo or chordo
const obj3= {...anu, ...pip}
console.log(obj3);



const course = {
      name:"js",
      price:"999",
      instructor:"anurag"  
   }

//to print instrucor 3 or more times we do not use console.log many time instead

//OBJECT DESTRUCTURING
console.log(course.instructor);
const {instructor}=course
console.log(instructor);

//APNA KAAM KISI OR KE SR PAR DALNA = API