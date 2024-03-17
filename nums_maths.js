const score = 900 //it is number but if you want a number specefically , then 
console.log(score);

const num = new Number(600)
console.log(num);
console.log(num.toString().length);
// for e-commerce sites, use:
console.log(num.toFixed(6)); //600.000000


// round off
const othernum = 758.326534
console.log(othernum.toPrecision(3));
console.log(othernum.toPrecision(4));

// comaas in hundreds
const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-6)); // - to +
console.log(Math.round(6.4)); 
//ceil------>4.9 will convert to 5
//floor----->4.9 will convert to 4
console.log(Math.max(2,3,4,5));
console.log(Math.min(2,3,4,5));
console.log(Math.random()); //gives random value between 0 and 1

console.log(Math.floor(Math.random()*10)+1);// +1 to avoid getting 0 on 0.4

//TO GET VALUES BETWEEN 10 TO 20 RANDOMLY
const min=10 
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);