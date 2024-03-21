/*
type changing or typecasting is implicitly done in JavaScript,
 when the compiler or runtime automatically converts data types.
*/

let item = new Number("0x11");
console.log(item);

console.log(typeof(item));

let sum = "1" + 1;
console.log(`The value of sum is ${sum}`);
console.log(`The type of sum is ${typeof(sum)}`);

let sum2 = 1+2+"3" ;
console.log(`The value of sum2 is ${sum2}`);
console.log(`The type of sum2 is ${typeof(sum2)}`);

/* The data type gets implicitly changed in Js 
    ~ type coercion
    ~type juggling
*/
