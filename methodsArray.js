// let arr = ["I", "go", "home"];

// delete arr[1]; // remove "go"

// // console.log( arr[1] ); // undefined

// // now arr = ["I",  , "home"];
//  console.log( arr ); // 3


// The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.
// it removes permanently
// let arr = ["I", "study", "JavaScript"];

// arr.splice(0, 4); // from index 1 remove 1 element

// console.log( arr ); // ["I", "JavaScript"]



// let arr = ["I", "study", "JavaScript", "right", "now"];

// // remove 3 first elements and replace them with another
// arr.splice(2, 1, "Let's"); //replace

// console.log( arr ) // now ["Let's", "dance", "right", "now"]



// let arr = ["I", "study", "JavaScript", "right", "now"];

// // remove 2 first elements
// let removed = arr.splice(0, 2);

// console.log( removed ); // "I", "study" <-- array of removed elements


// let arr = ["I", "study", "JavaScript"];

// // from index 2
// // delete 0
// // then insert "complex" and "language"
// arr.splice(2, 0, "complex", "language");

// console.log( arr ); // "I", "study", "complex", "language", "JavaScript"



// let arr = [1, 2, 5];

// // from index -1 (one step from the end)
// // delete 0 elements,
// // then insert 3 and 4
// arr.splice(1, 1, 3);

// console.log( arr ); // 1,2,3,4,5












// //slice 
// //  it only copies element do not delete

// let arr = ["t", "e", "s", "t"];

// // console.log( arr.slice(-3,-1) );
// console.log(arr);

// // console.log( arr.slice(-2) ); 
