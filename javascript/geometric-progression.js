let createProgressionBtn = document.querySelector('#generate-geometric-progression');
let a1 = document.querySelector('#pg-a1');
let q = document.querySelector('#pg-q');
let n = document.querySelector('#pg-n');

// placeholders for arithmetic progression and sum
let progressao = document.querySelector('#progressao');
let soma = document.querySelector('#pg-soma');

createProgressionBtn.onclick = function(){
    let geometricProgression = a1.value;
    const firstElement = parseInt(a1.value);
    let lastValue = parseInt(a1.value);
    const quotient = parseFloat(q.value);
    const numberOfElements = parseInt(n.value);
    let sumOfElements = firstElement;
    for(let i = 1; i < numberOfElements; i++){
        lastValue = lastValue * quotient;
        sumOfElements += lastValue;
        geometricProgression = geometricProgression + ' ' + lastValue;
    }
    console.log(geometricProgression);
    soma.textContent = sumOfElements;
    progressao.textContent = geometricProgression;
}