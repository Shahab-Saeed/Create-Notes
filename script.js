const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showLocalStorageNotes() {
  notesContainer.innerHTML = localStorage.getItem(
    "notes",
    notesContainer.innerHTML
  );
}

showLocalStorageNotes();

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

function udateLocalStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    udateLocalStorage();
  } else if (e.target.tagName === "P") {
    notes=document.querySelectorAll(".input-box")
    notes.forEach((text) => {
      text.onkeyup = function () {
        udateLocalStorage();
      };
    });
  }
});


document.addEventListener("keydown",e=>{
    if(e.key==="Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})