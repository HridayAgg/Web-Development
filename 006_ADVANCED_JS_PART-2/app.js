// let box = document.querySelectorAll(".box")
// console.log(box);
// let bb = document.getElementById("box")
// console.log(bb);
// let all = document.getElementsByClassName("")
// let para = document.querySelector("p")
// console.log(para.innerText);
// console.log(para.innerHTML);
// console.log(pansole.log("izzo")
//             head.sra.textContent);

// let head = document.querySelector("h1")
// head.innerText = "Hello Hu Sr"
// head.innerHTML = "Hello <s>gd</s> Hu Sr"


// function chngone(){
//     setInterval(()=>
//         {
//                 // console.log("izzo")
//             head.style.color="blue";
//             chngtwo();
//         },800)
// }

// function chngtwo(){
//     setInterval(
//         ()=>{
//             // console.log("f1lthy");
//             head.style.color="red"
//             chngone();
//         },800
//     )
// }
// chngone();
// // setTimeout(
    
//     ()=>{
//             console.log("cia")

//         setInterval(()=>
//         {
//                 cotyle.color="blue";
//         },1000)
//     },100
    
// )
// let togglebtn = document.querySelector(".togglebtn")
// let body = document.querySelector(".dark")
// togglebtn.addEventListener("click",()=>{
//     body.classList.toggle("dark")
//     if (togglebtn.innerText=="dark"){
//         togglebtn.innerText="light"
//     }
//     else{
//         togglebtn.innerText="dark"

//     }
// })


let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    let img = document.createElement("img")
    img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRhrybYAx24cBrIRc-WQ2GCvjQ_2xl0R5RO1pk-OmkDKCEBF_qfL0m0qARB0CP6cXxV1k&usqp=CAU")
    img.style.position = "absolute"
    img.style.height="100px"
    img.style.width="100px"
    img.style.top=(Math.random()*90)+"%"
    img.style.right=(Math.random()*90)+"%"
    document.body.appendChild(img);
})