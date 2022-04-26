var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    if (currentNumber<10) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    else {}
    numberColor();
}

function decrement() {
    if (currentNumber>-10) {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    else {}
    numberColor();
}

function numberColor() {
    if (currentNumber<0) {
        currentNumberWrapper.style.color = 'red';
    }
    else {
        currentNumberWrapper.style.color = 'black';
    }
}

let lb = document.getElementById('leftButton');
let rb = document.getElementById('rightButton');

lb.addEventListener('click',decrement);
rb.addEventListener('click',increment);