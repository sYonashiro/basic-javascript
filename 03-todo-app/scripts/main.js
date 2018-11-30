var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = ['Fazer café', 'Estudar Javascript', 'Acessar comunidade da Rocketseat'];

function renderTodos() {
  listElement.innerHTML = '';

  for (todo of todos) {
    var textNode = document.createTextNode(todo);
    var liElement = document.createElement('li');
    liElement.appendChild(textNode);

    var linkElement = document.createElement('a');
    var linkText = document.createTextNode('Excluir');
    linkElement.setAttribute('href', '#');
    
    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')
    
    linkElement.appendChild(linkText);
    liElement.appendChild(linkElement);
    listElement.appendChild(liElement);
  }
}

renderTodos();

function addTodo() {
  if (!inputElement.value.trim())
    return;

  todos.push(inputElement.value);
  renderTodos();

  inputElement.value = '';  
}

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
}

buttonElement.onclick = addTodo;