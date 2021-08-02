
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    let list = document.createElement('li');
    list.classList.add('list-styling');
    list.innerText = inputField.value;
    toDoContainer.appendChild(list);
    inputField.value = "";
    list.addEventListener('click', function(){
        list.style.textDecoration = "line-through";
    })
    list.addEventListener('dblclick', function(){
        toDoContainer.removeChild(list);
    })
})