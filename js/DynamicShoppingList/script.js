/**
 * Action plan
 * 
 * Whenever the Add item button is pressed (1), you select the
 * content of 'input' (2) and add it to the list along with the
 * 'delete' button (3).
 * 
 * Whenever the delete button is pressed, it's associated
 * list item is removed, as well as itself. (4)
 * 
 * (3) CreateListItem
 * (4) DeleteListItem
*/

function CreateListItem(itemName) {
  const li = document.createElement("li");
  li.textContent = itemName;
  
  const deleteButton = document.createElement("button")
  deleteButton.textContent = 'Delete';
  deleteButton.classList.toggle('delete')
  deleteButton.style.display = "inline"
  deleteButton.addEventListener('click', (ev)=>{
    if (ev.target != deleteButton) return
    DeleteListItem(li)
  })
  
  li.appendChild(deleteButton)
  return li;
}
function DeleteListItem(itemButton) {
  itemButton.remove()
}

const list = document.querySelector('ul');
const input = document.querySelector('#item');
const addButton = document.querySelector('.add-item > button');

function AddItem(){
  const itemName = input.value.trim();
  input.value = '';
  const li = CreateListItem(itemName);
  list.appendChild(li);
}
addButton.addEventListener('click', (ev)=>{
  if (!input.value) return
  AddItem();
  input.focus()
})

input.addEventListener('keydown', (ev)=>{
  if (ev.key != "Enter") return
  if (!input.value) return
  AddItem();
})