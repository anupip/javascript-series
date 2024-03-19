const myArr = [1, 2, 3, 4, 5, true, "hitesh"]  //js array can contain mix data types

//shallow copies - share same reference (heap)
//deep copies - do not share same reference (stack)

const myArr2 = new Array(1,2,3,4,5,6,7,8,9,10)
console.log(myArr2[6]);

//array methods
myArr.push('anurag')
console.log(myArr);
myArr.pop() // removes last value
console.log(myArr);

// myArr.unshift(3);//inserts 3 at starting,but for 10,000 values it must be very  time consuming
console.log(myArr); 

console.log(myArr.includes(5)); //gives answer in true or false

const newarray = myArr.join() // change typeof from array to string

console.log("A",myArr);
const mya1 = myArr.slice(1,4) // start from index 1 and does not include index 4
console.log(mya1);

const mya2 = myArr.splice(1,4) // a portion of array from index 1 to 4 is removed and original array is manipulated
console.log("B",myArr);
console.log(mya2);
