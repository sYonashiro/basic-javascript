var listElement = document.getElementById('names');
var names = ["Diego", "Gabriel", "Lucas"];

for (name of names) {
    addItemList(name);
}

function add() {
    var inputElement = document.getElementById('name');

    if (!inputElement.value.trim())
        return;

    addItemList(inputElement.value);

    inputElement.value = '';
}

function addItemList(text) {
    var liElement = document.createElement('li');
    var textNode = document.createTextNode(text);

    liElement.appendChild(textNode);
    listElement.appendChild(liElement);
}