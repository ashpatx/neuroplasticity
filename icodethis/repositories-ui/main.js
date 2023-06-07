// Hover effect on the plus icon
function mouseOverIcon() {
    document.querySelector('#plus').style.backgroundColor = "var(--bg-neutral)";
    document.querySelector('#plus').style.color = "var(--color-dark-purple)";
  }
  
  function mouseOutIcon() {
    document.querySelector('#plus').style.backgroundColor = "var(--color-dark-purple)";
    document.querySelector('#plus').style.color = "var(--bg-neutral)";
  }
  
  // Hover effect on the create button
  function mouseOverButton() {
    document.querySelector('.create-btn').style.backgroundColor = "var(--bg-neutral)";
    document.querySelector('.create-btn').style.color = "var(--color-dark-purple)";
  }
  
  function mouseOutButton() {
    document.querySelector('.create-btn').style.backgroundColor = "var(--color-dark-purple)";
    document.querySelector('.create-btn').style.color = "var(--bg-neutral)";
  }
  
  // Get all the elements with the class "row"
  var rows = document.getElementsByClassName('row');
  
  // Hover effect on rows
  function mouseOverRow() {
    var iconElement = this.querySelector('.fa-lock');
    var textElement = this.querySelector('#row-text');
  
    iconElement.style.color = 'var(--color-dark-purple)';
    textElement.style.color = 'var(--color-dark-purple)';
  }
  
  function mouseOutRow() {
    var iconElement = this.querySelector('.fa-lock');
    var textElement = this.querySelector('#row-text');
  
    iconElement.style.color = ''; // Reset to the default color 
    textElement.style.color = ''; // Reset to the default color 
  }
  
  // Add event listeners for the plus icon, create button, and rows
  document.getElementById('plus').addEventListener('mouseover', mouseOverIcon);
  document.getElementById('plus').addEventListener('mouseout', mouseOutIcon);
  document.querySelector('.create-btn').addEventListener('mouseover', mouseOverButton);
  document.querySelector('.create-btn').addEventListener('mouseout', mouseOutButton);
  
  for (var i = 0; i < rows.length; i++) {
    rows[i].addEventListener('mouseover', mouseOverRow);
    rows[i].addEventListener('mouseout', mouseOutRow);
  }
  
