var listElement = document.getElementById('names');
var names = ["Diego", "Gabriel", "Lucas"];

for (name of names) {
    var liElement = document.createElement('li');
    var text = document.createTextNode(name);

    liElement.appendChild(text);
    listElement.appendChild(liElement);
}