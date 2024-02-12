const hideBtn = document.getElementById("hide-btn");
const addNoteBtn = document.getElementById("new-note-btn");
const modalContainer = document.getElementById("modal-container");
const text = document.querySelector("#user-input");


const rotateOptions = ["rotate(4deg)", "rotate(2deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-7deg)"];
const colorOptions = ["#f9c284", "#efd6af","#cfdea8","#cfdfd3"];
const positionOptions = ["-10px", "-5px", "1px", "5px", "10px", "15px", "20px"];
const i = 0;

window.onload = document.querySelector("#user-input").select();

addNoteBtn.addEventListener("click", () => {
  modalContainer.style.display = "block";
});

hideBtn.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

document.querySelector("#user-input").addEventListener('keydown', (event) => {
  if(event.key === "Enter" && event.metaKey) {
    createNote(text.value);
    text.value = ""; 
  }
});

createNote = (text) => {
  let note = document.createElement("div");
  let input = document.createElement("div");
  let noteText = document.createElement("h2");

  note.className="note";
  input.className="input";
  noteText.className="text";

  input.appendChild(noteText);
  note.appendChild(input);

  noteText.textContent = text;

  //Toggle line through for completed tasks
  note.addEventListener("click", () => {
    note.classList.toggle("done");
  });


  if (i > colorOptions.length - 1)
    i = 0;

    note.setAttribute("style", `margin:${positionOptions[Math.floor(Math.random() * positionOptions.length)]}; background-color:${colorOptions[Math.floor(Math.random() * colorOptions.length)]}; transform:${rotateOptions[Math.floor(Math.random() * rotateOptions.length)]}`);
    noteText.textContent = document.getElementById("user-input").value;   
    note.addEventListener('mousedown', (event) => {
      if (event.metaKey) {
        note.remove(); 
      }
    });


    //Make notes draggable
    note.draggable = true;
    note.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", "This is a note");
    });

    document.querySelector("#all-notes").appendChild(note);
  };

  //Event listeners for drop targets
  const dropTarget = document.querySelector("#all-notes-container");
  dropTarget.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  dropTarget.addEventListener("drop", (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.querySelector(".note");
    if (draggedElement) {
      dropTarget.appendChild(draggedElement);
    }
  });
