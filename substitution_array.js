function evenToZero(array) {
    if(!array) return -1;
    if(!array.length) return -1;

    array = array.map(function(item) {return (item % 2 === 0) ? 0 : item;})
    return array;
}

let arr = [];

console.log(evenToZero(arr));