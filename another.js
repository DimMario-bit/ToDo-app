let addToDoButton = document.getElementsByTagName('button');
let toDoContainer = document.getElementsByTagName('ul');
let inputField = document.getElementsById('text');

addToDoButton.addEventListener('click', function(){
    let list = document.createElement('li');
    list.classList.add('list-styling');
    list.innerText = inputField.value;
    toDoContainer.appendChild(list);
    inputField.value = '';
    list.addEventListener('click', function(){
        list.style.color = 'red';
    })
    list.addEventListener('dblclick', function(){
        toDoContainer.removeChild(list);
    })
})