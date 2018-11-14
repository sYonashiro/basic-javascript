var btnElement = document.getElementById('btn');

btnElement.onclick = function() {
    var square = document.createElement('div');
    var squaresElement = document.getElementById('squares');

    square.style.width = '100px';
    square.style.height = '100px';
    square.style.margin = '10px';
    square.style.backgroundColor = '#F00';

    squaresElement.appendChild(square); 
}