// int arr[]=new int[5];

// let arr=[1,'c',"amir",true];
// console.log(arr);

//in javascript size of arr is not fixed ,we can mix datatypes 

// console.log(arr[-3]);undefined

//console.log(arr[4]); undefined
// 2---"2"



// if u want to change 2 to "2"= either "2" or 2-"0"
// console.log(arr[2-"0"]);

// console.log(arr2); 
// arr=[1,2,3,4]
// let arr2=arr;
// console.log(arr2);
// console.log(arr);


//  let arr2=new Array(1,'c',"amir",true);
// // console.log(arr2);
// let d=2;
// console.log(Array.isArray(d));


//replace
// let arr=[1,2,3,4]
// arr[2]=5;
// console.log(arr);


// let arr=[1,2,3,4]
// console.log(arr.length);

// let fruits = [
//     "Apple",
//     "Orange",
//     "Plum",
//   ];

//   let obj={
//    f1:"Apple",
//    f2 : "Orange",
//    f3:"Plum",
//   }
//   console.log(obj.f2);


// let fruits = ["Apple", "Orange", "Plum"];

// // same as fruits[fruits.length-1]
// console.log( fruits.at(-4) ); // Plum

// In other words, arr.at(i):
// is exactly the same as arr[i], if i >= 0.
// for negative values of i, it steps back from the end of the array.



// permanently remove the element
// let fruits = ["Apple", "Orange", "Pear"];
// let removedFruit=fruits.pop()
// // console.log(removedFruit); 

// console.log( fruits );

// //add permanently to the array
// let fruits = ["Apple", "Orange"];

// fruits.push("Pear");

// console.log( fruits ); // Apple, Orange,pear

// shift() remove first element and returns it

// let fruits = ["Apple", "Orange", "Pear"];

// //  fruits.shift() ;

// console.log( fruits ); 


// let fruits = ["Orange", "Pear"];

// fruits.unshift('Apple');

// console.log( fruits ); // Apple, Orange, Pear


// let fruits = ["Apple"];

// fruits.push("Orange", "Peach");
// fruits.unshift("Pineapple", "Lemon");

// console.log(fruits);


// let fruits = ["Banana"]

// let arr = fruits; // copy by reference (two variables reference the same array)

// alert( arr === fruits ); // true

// arr.push("Pear"); // modify the array by reference

// alert( fruits ); // Banana, Pear - 2 items now



// let fruits = ["Apple", "Orange", "Pear"];
// // console.log(fruits[0]);
// // console.log(fruits[1]);
// // console.log(fruits[2]);
// let i=0;
// for(;i<fruits.length;){
//     console.log(fruits[i]);
//     i++;
// }


// let fruits = ["Apple", "Orange", "Plum"];

// // iterates over array elements
// for (let haathi of fruits) {
//   console.log( haathi );
// }



// let arr = ["Apple", "Orange", "Pear"];
// //for in gives index of the array
// for (let ghoda in arr) {
//   console.log( arr[ghoda] ); // Apple, Orange, Pear
// }


// let arr=[1,2,3,4]
// arr[100]=36;//[1,2,3,4,.............36]
// console.log(arr[101]);

// console.log(3/2-0.5);

// let arr=[1,2,3,4,5]
// let arr2=[1,3,4]

// let middle=arr.length/2-0.5;
// arr[middle]=7;
// middle=arr2.length/2-0.5;
// arr2[middle]=8;
// console.log(arr);
// console.log(arr2);


// for(let i=0;i<=100;i+=2){
//     if(i!=0){
// console.log(i);
//     }
// }




