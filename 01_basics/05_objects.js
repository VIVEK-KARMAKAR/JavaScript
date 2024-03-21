/* singleton object is created when object is created through constructor 
Object.create 
const User = new Object()

~~~~Object literals~~~~
*/
const admissionNumber= Symbol()
const JsUser ={
    name: "Vivek",
    "Fullname": "Vivek Karmakar",
    age: 18,
    location: "Jharkhand",
    isLoggedIn: false,
    [admissionNumber]: Symbol("NSU2203253"),
}

console.log(JsUser[age]);
console.log(typeof(JsUser[admissionNumber]));

// Object.freeze(JsUser);   // does not let changes to occur anymore

JsUser.greetings = function () {
    console.log(`Hello JS User , ${this.name}`);
}

console.log(JsUser.greetings());

// ~~~~~~~~NESTING OF OBJECTS~~~~~~~~