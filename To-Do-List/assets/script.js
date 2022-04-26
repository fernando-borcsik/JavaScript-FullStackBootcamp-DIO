let checklist = document.getElementById('checklist');

var i = 0;

linebreak = document.createElement("br");

function addItem() {
    let newItem = document.getElementById('itemInput').value;
    var input = document.createElement("input");
    input.type = "checkbox";
    input.id = "item " + i;
    input.name = "item " + i;
    checklist.appendChild(input);
    checklist.append(newItem);
    i++;
}

let addItemButton = document.getElementById('addItemButton');

addItemButton.addEventListener('click', addItem);