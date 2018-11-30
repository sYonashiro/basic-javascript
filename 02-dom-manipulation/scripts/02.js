function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

var squaresElement = document.getElementById('squares');
var btnElement = document.getElementById('btn');

btnElement.onclick = function () {
    var square = document.createElement('div');

    square.style.width = '100px';
    square.style.height = '100px';
    square.style.margin = '10px';
    square.style.backgroundColor = '#F00';

    square.onmouseover = function () {
        square.style.backgroundColor = getRandomColor();
    }

    squaresElement.appendChild(square);
}