
let inputbox = document.querySelector(".inputbox")
let addbtn = document.querySelector(".addbtn")
let tasks = document.querySelector(".tasks")
let valid = document.querySelector(".valid")
valid.classList.toggle("hidden")
addbtn.addEventListener("click",()=>{
    if (inputbox.value==""){
        valid.classList.toggle("visible")
    }
    tasks.classList.add("box")
    tasks.style.backgroundColor="Red"
    tasks.style.height="100px"
    tasks.style.width="100px"
    let pTag = document.createElement("p")
    pTag.innerHTML = inputbox.value
    console.log(pTag)
    tasks.appendChild(box)
    box.appendChild(pTag)
    let delbtn = document.createElement("button");
    delbtn.innerText="x"
    console.log(delbtn.parentElement);
    
    tasks.appendChild(delbtn)
    delbtn.parentElement.style.display = "flex"
    console.log(delbtn.parentElement);

    inputbox.value = ""

})
