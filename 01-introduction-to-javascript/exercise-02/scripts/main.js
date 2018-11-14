function getEvenNumbers(x, y) {
    var text = ''; 
  
    for (var i = x; i < y; i++) {
        if (i % 2 !== 0)
            continue;

        text += i == x ? i : ', ' + i;
    }

    return text;
}

console.log(getEvenNumbers(32, 321));