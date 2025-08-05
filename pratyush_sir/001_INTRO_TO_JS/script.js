/*
// / Printing 
console.log("What");

/ Variable declaration

var a=10;
console.log(a)
a=20;
var a =90; // we can reinitalize in var
console.log(a)

// Varaible declare using let 

let l = 10
l = 20 // this will work but not reinitializing (let l = 20)
console.log(l);

// Varaible declare using const

const c = 10;
// c=20 <- this will throw a error coz it is const
console.log(c);

// functions

function sumof(par1,par2){
    var s = par1+par2;
    return s;
}
console.log(sumof(1,2));



// How javascript code is run 

console.log(aa);
let aa= 200;
let bb=400;
console.log(bb);

function first(){
    let a = 20;
    let b =30;
    console.log();
    function second(){
        let c=50;
        function third(){
            let d=80;
            return a+b+c+d;
        }
        console.log(third());
    }
    second();
}
console.log(first());


setTimeout(function (){ //after x time
    console.log(
        
        "Hello i am settimeout"
    );
},5000);

setInterval(function (){ // after every x time kinda loop
    "Hey"
},2000);
//HW - how to stop set interval
*/

