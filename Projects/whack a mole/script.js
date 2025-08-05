
document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    heading.textContent = 'Hello, World!';
});
let val;
setInterval(()=>{
    val = Math.floor(Math.random()*10)
},1000)

