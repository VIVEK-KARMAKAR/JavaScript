//~array

const myArr = [19,28,3,74,25,55];
const myHeros = ["Wolverine", "Storm", "Deadpool" ];
const myArr2 = new Array();

// In Js array can consist diff types of data in arrays , and they arae resizable
console.log(myArr[2]);

myArr.push(66)
myArr.push(99)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(12)
myArr.shift()

console.log(myArr.indexOf(55));
console.log(myArr.includes(74));

const newArray = myArr.join()


