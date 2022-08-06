var mypc = {
    cpu : 'i5',
    ssd : '256gb',
    ram : '8gb',
    psu : 450
}
// finding value of a property/key
// 1. use dot notation
var storage = mypc.ssd;
console.log(mypc['ssd']);
// 2. use third bracket notation
// var memory = mypc['ram'];
// console.log(memory);
// // 3.declare a variable 
// var keyname = mypc['cpu'];
// console.log(keyname);

// // showing object keys or values as an array

// var keys = Object.keys(mypc);
// var keyvalues = Object.values(mypc);
// console.log(keys);

// // set key values

// mypc.ssd = '512gb';
// console.log(mypc);

// mypc['ssd'] = '128gb';
// console.log(mypc);

// mypc[keys] = 'i7';
// console.log(mypc);