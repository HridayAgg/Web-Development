// this code will spit 1-10 after 2s
// setTimeout(function(){
//     for(var a=0;a<=10;a++)
//     console.log(a)
//     },2000)


//this is a example of closure asked in interview as we are creating its own scope so that it doesnt have to see the 
// global scope for reference and avoid that it to spit the same thing at the end of timeout eg-that 6,6,6,6,6,6
for(var i=0;i<=5;i++){
    function c(a){
    setTimeout(function(){
        console.log(a)
    },4000)
}
c(i)
}

// this will be undefined because 
// for(var i=0;i<=10;i++){
//     setTimeout(function(){
//         console.log(i)
//     },4000)
// }


