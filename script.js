//Sangeeth
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function show(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

show();

 createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete icon.png";
    img.className = "delete-icon"
    notesContainer.appendChild(inputBox).appendChild(img);
    save();
 })

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        save();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                save();
            }
        })
    }

   
}) 

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertlineBreak");
        event.preventDefault();
    }
})

function save(){
    localStorage.setItem("notes",notesContainer.innerHTML);   
}








