//FUNCTIONS

// 1. Simple func
function name(par){
    return 1;
}


//2. arrow func
() => {

}

//3.  function expression

//this will return error coz it is seen as variable in which hoisting is done(not undefined kyunki varname = undefined but
//we called undefined() to error hi aagya)
/*
varname();
var varname = function func(){
    console.log("beach")
}          

//this is ok
var varname = function func(){
    console.log("beach")
}
varname();
function prin(par){
    par();
}
prin(func)


//first class function - passing function as an argument
practical use is to wrap a function around another function 
basically if we want to reuse a function and we dont want to make it again and again we can 
pass the barebones function to another function 

function percentOff(percent) {
  return function(price) {
    return price - (price * percent / 100);
  };
}

const off20 = percentOff(20); // makes a function that applies 20% off
const off30 = percentOff(30);
const off50 = percentOff(50);

console.log(applyDiscount(1000, off20)); // 800
console.log(applyDiscount(2000, off30)); // 1400
console.log(applyDiscount(1500, off50)); // 750

we didnt have to write the whole percentoff logic again and again

function addit(one,two){// when u dont return in a funciton it will always throw undefined
    return one+two
}
function allit(operation,num1,num2){
    return operation(num1,num2);
}
console.log(allit(addit,1,2))

*/