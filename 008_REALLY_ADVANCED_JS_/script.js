let btn = document.querySelector("button")
let list = document.querySelector(".list")
btn.addEventListener("click",()=>{
    let parent = btn.parentElement
    console.log(parent);
    parent.style.backgroundColor="pink"
    
})
list.addEventListener("click",()=>{
    console.log(list.children);
    console.log(list.firstElementChild);
    console.log(list.lastElementChild);
    console.log(list.firstChild);
    console.log(list.lastChild);
    console.log(list.nextElementSibling);
    console.log(list.previousElementSibling);
    list.removeAttribute("class")
    console.log(list.nextElementSibling.src);
    console.log(list.removeAttribute("color"))
    console.log("First element id before :" + list.firstElementChild.id);
    
    list.firstElementChild.id = "list1"
    list1.style.color = "green"
    console.log(list.firstElementChild.id);
    
})
let input = document.querySelector("input")

input.addEventListener("mouseout",()=>{
    console.log("mouseout");
    
})

input.addEventListener("keydown",(event)=>{
    console.log("keydown");
    if (event.key == "h"){
        console.log("lessgo");
        
    }
    else{

        console.log(event.key);
    }

})

input.addEventListener("keypress",(event)=>{
    console.log("keypress");
    console.log(event.key);
    
})

input.addEventListener("keyup",()=>{
    console.log("keyup");
    
})