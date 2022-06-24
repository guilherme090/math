let createProgressionBtn = document.querySelector('#generate-arithmetic-progression');
let a1 = document.querySelector('#pa-a1');
let r = document.querySelector('#pa-r');
let n = document.querySelector('#pa-n');

// placeholders for arithmetic progression and sum
let progressao = document.querySelector('#progressao');
let soma = document.querySelector('#pa-soma');

createProgressionBtn.onclick = function(){
    let arithmeticProgression = a1.value;
    const firstElement = parseInt(a1.value);
    let lastValue = parseInt(a1.value);
    const ratio = parseInt(r.value);
    const numberOfElements = parseInt(n.value);
    for(let i = 1; i < numberOfElements; i++){
        lastValue = lastValue + ratio;
        arithmeticProgression = arithmeticProgression + ' ' + lastValue;
    }
    const lastElement = firstElement + ratio*(numberOfElements - 1);
    const sumOfElements = (firstElement + lastElement) * numberOfElements / 2;
    console.log(arithmeticProgression);
    soma.textContent = sumOfElements;
    progressao.textContent = arithmeticProgression;
}