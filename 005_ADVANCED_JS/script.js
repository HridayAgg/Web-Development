let arr = [1, 2, 3, 4];
// console.log(arr);
// console.log(arr.join(','));
// console.log(arr.join(''));
// let arr2 = [2,3,4,5]
// function even(value, index) {
//     if (value % 2 == 0) {
//         return value;
//     }
// }
// console.log(arr.length);
// arr = arr.filter(even)
//  console.log(arr);
// console.log(arr.length);

let person = {
    name:'lil',
    last_name:'bhavi',
    age:18,
    address:{
        housenum:"C-106",
        near:"pahalgam"
    },
    fun: function izzo(){
        console.log("SWAMP IZZO",this.name,this.last_name);
        
    }
}
// console.log(person);
// console.log(person.address);
// console.log(person.age);
// console.log(person["age"]);
// console.log(person.fun());
// console.log(this);
// let arr11=[1,2,3];
// let arr12 = [4,5,6];
// console.log([...arr11,...arr12]);
// console.log([arr11+','+arr12]);
// let key = "name"
// console.log(person[key]);
// person.last_name = 'dicky';
// console.log(person.last_name);

// let date = new Date();
// console.log(date);

// let x = 10.2424
// console.log(Math.ceil(x)); // floor - chopping
// console.log(Math.floor(x)); // ceil - round off 
// console.log(Math.random())

// function parent(){
//     let a=10;
//     return child = function(){
//         console.log('gandhi ', a);
//     }
// }
// parent()()
console.log("hey");

setTimeout(()=>{
    console.log('what');
    
},3000)
console.log('bye');
setInterval()