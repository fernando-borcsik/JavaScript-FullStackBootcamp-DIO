const arr = [1, 3, 4, 6, 7];

const apple = {
    value: 2,
}

const orange = {
    value: 5,
}

function mapWithThis(arr, thisArg) {
    return arr.map(function(item) {
        return item / this.value;
    } , thisArg);
}

console.log(mapWithThis(arr, orange));

function mapWithoutThis(arr) {
    return arr.map(item => item / 4);
}

console.log(mapWithoutThis(arr));

function evenNums(arr) {
    return arr.filter(item => item % 2 === 0);
}

console.log(evenNums(arr));


function arrayMult(arr) {
    return arr.reduce((a, b) => a * b, 1);
}

console.log(arrayMult(arr));


function finalAmount(arr, amount) {
    return arr.reduce((a, b) => a - b.preco, amount);
}

const lista = [
    {
        name: 'aveia',
        preco: 18,
    },
    {
        name: 'chocolate',
        preco: 15,
    },
    {
        name: 'milho',
        preco: 5,
    }
]

console.log(finalAmount(lista, 50));