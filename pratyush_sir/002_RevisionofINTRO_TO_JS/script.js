
var b = 10;
console.log(b);
var a = 10;
function square(par){
    var sq = par*par;
    console.log(sqroot(sq));
    function sqroot(sq1){
        var sqroot = sq1/par;
        console.log(squareagn(sqroot));
        function squareagn(par2){
            return par2*par2;
        }
        return sqroot;
    }
    return sq;
}
console.log(square(5));


// for(var i=0;i<=10;i++){ //for loop
//     console.log(i);
    
// }
/*
console.log("hey");
setTimeout(function(){
    console.log("what up");}
,5000);
*/


