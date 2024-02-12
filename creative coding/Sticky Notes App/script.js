const container02 = document.getElementsByClassName('container02')[0];
const container03 = document.getElementsByClassName('container03')[0];
const approveBtn = document.getElementById("approve-button"); 
const deleteBtn = document.getElementById("delete-button");


approveBtn.addEventListener("click", function(event){
  event.preventDefault();
  addNote();
})

deleteBtn.addEventListener("click", function(){
  typeNote();
})

//edit current note
function typeNote(){
    if (container03.style.display = "none") {
      container03.style.display = "block"; 
    } else {
      container03.style.display = "none"; 
    }
  }  

//create new note
function addNote(){
  let noteText = document.getElementById("note-text").value;
  let nodeZero = document.createElement("div");
  let nodeOne = document.createElement("h1");

  nodeOne.innerHTML = noteText;
  nodeOne.setAttribute("style", "width:250px; height:250px; padding:20px; font-size:24px; overflow:hidden; margin-top:10px;");

  nodeOne.style.margin = position();
  nodeOne.style.transform = rotate();
  nodeOne.style.background = color();

  nodeZero.appendChild(nodeOne);

  container02.insertAdjacentElement('beforeend', nodeZero);

  nodeZero.addEventListener("mouseenter",function(){
    nodeZero.style.transform="scale(1.1)";
  })
  nodeZero.addEventListener("mouseleave",function(){
    nodeZero.style.transform="scale(1)";
  })
  nodeZero.addEventListener("dblclick", function(){
    nodeZero.remove();
  })
  document.getElementById("note-text").value = '';
}

//vary random positioning for each note using an array
function position(){
  let positionOptions = ["-10px", "-5px", "1px", "5px", "10px", "15px", "20px"];
  return positionOptions[Math.floor(Math.random() * positionOptions.length)];
}

//vary rotation on each note
function rotate(){
  let rotateOptions = ["rotate(4deg)", "rotate(2deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-7deg)"];
  return rotateOptions[Math.floor(Math.random() * rotateOptions.length)];
}

//vary color for each note
function color(){
  let colorOptions = ["#f9c284", "#efd6af","#cfdea8","#cfdfd3"];
  let i = 0;
  const colorIndex = i % colorOptions.length; // Use remainder operator to cycle through colors
  i++; // Increment i for the next call
  return colorOptions[colorIndex];
}
