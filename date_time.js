let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toString());

let myCreate=new Date(2023,0,23) //months count start from 0 as array index starts from 0
console.log(myCreate.toLocaleDateString());

let myCreate1=new Date("2023-01-23")
console.log(myCreate1.toLocaleString());

//time
let myTime = Date.now()
console.log(myTime);

let my=new Date()
console.log(my.getMilliseconds());
console.log(my.getMonth()+1);