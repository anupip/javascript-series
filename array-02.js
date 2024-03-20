//array_02

const hero =["a","b","c","d"]
const zero=["e","f","g","h"]
// hero.push(zero) //will push whole array into hero array
// console.log(hero);
// console.log(hero[4][1]); // will give the value of array in array

//CONCAT will concat two different arrays

const all= hero.concat(zero)
console.log(all);

const allnew= [...hero, ...zero]
// ... will spread the array and the values will get individually divided
console.log(allnew);


// if ther are array in array in array 
const kl=[1,2,3,[2,4,56,78,3,[5,7,3,6,3,6]]]
const jl=kl.flat(Infinity)// will concatinate all arrays till infinity depth
console.log(jl);

//to convert any type to array
console.log(Array.isArray("anurag"));// blloean to check
console.log(Array.from("anurag"));//will convert the given string to array
console.log(Array.from({name: "anurag"}));//will give empty array because not specified to consider keys or values

//to create array of any variables
const score1 =200
const score2 =300
console.log(Array.of(score1,score2));