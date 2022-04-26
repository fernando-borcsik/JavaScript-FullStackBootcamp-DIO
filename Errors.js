function lengthCheck(arr, length) {
    try {
        if (!arr || !length) throw new ReferenceError('Parâmetros não preenchidos');
        if (typeof arr !== 'object') throw new TypeError('O primeiro parâmetro deve ser um array');
        if (typeof length !== 'number') throw new TypeError('O segundo parâmetro deve ser um número');
        if (arr.length !== length) throw new RangeError('O tamanho do array é diferente do valor fornecido');
        return arr;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError!');
            throw e;
        }
        else if (e instanceof TypeError) {
            console.log('Este erro é um TypeError!');
            throw e;
        }
        else if (e instanceof RangeError) {
            console.log('Este erro é um RangeError!');
            throw e;
        }
        else {
            console.log('Tipo de erro inesperado: ' + e);
        }
    }
}

const arr = [1, 2, 3, 4, 5];

console.log(lengthCheck(arr, 4));