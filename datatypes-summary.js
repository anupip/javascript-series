/*PRIMITIVE :
7 types--- string, number, boolean, null(ekdm khali\empty) , undefined
(declared but not yet defined) , symbol(make a value unique), BigInt(store large scientific values)

REFERENCE :
array, objects, functions

*/
//symbol
const id=Symbol("123")
const ab=Symbol("123")
console.log(id==ab);

const bigNumber=1234567876543234567n //bigInt

//array
const human=["rakesh","mukesh","ritesh"]
console.log(human);

//object
let myObj={
  name: "Anurag",
  age:21,
}
console.log(myObj);

//function
const myFun = function(){
      console.log("hello world");
}
console.log(typeof myFun);