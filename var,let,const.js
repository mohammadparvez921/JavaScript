console.log(j);
//console.log(i);
//console.log(k);
var j=10;
//10
j=2;
//2
const i=10;
let l=i;
let k=28;
//28
k=9;
//9
{
    const i=2;
    var j=8 //value overridden
     k=20;
     //console.log(k);
     //console.log("inner"+j);
    // console.log("inner"+k);
}
console.log(k);
var j=23;
console.log("j value"+j);
// console.log("outer"+i);
// console.log("outer"+k);


