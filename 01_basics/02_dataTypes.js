/*
*************DATA-TYPES*************

-------------primitive data types-------------
There are 7 primitive data types :--

    ~ String         "stringInstance"
    ~ Number       32
    ~ BigInt         8987937483434n
    ~ Boolean       True/False
    ~ Null          null
    ~ Undefined 
    ~ Symbol

-------------non-primitive data types-------------

There is only one non-primitive or complex data-type in JavaScript 
    ~Object [user-defined data_type]
*/

let student = {                                      // object 

    fullName: "Vivek Karmakar",                       // string
    age: 21,                                        // number
    contactNumber: 8797361285,                     // BigInt   (The bigint type represents the whole numbers that are larger than 2^53 – 1.)
    referralName: null,                              // null
    referralD: undefined,                            // undefined
    admissionStatus: true,                          // boolean
    admissionNumber: Symbol("NSU2203253"),        // symbol

}
// console.log(student);
console.table([student]);                             // priniting the data in a tabular form
// console.log(typeof(student));

// to acces the data in a object we have to use instances using the "." (dot operator)

// console.log(student.referralD);
console.log(`The data type of referalID is ${typeof(student.referralD)}`);

// console.log(student.admissionNumber);
console.log(`The data type of Admission number is ${typeof(student.admissionNumber)}`);

// console.table([student.fullName, student.age , student.contactName]);