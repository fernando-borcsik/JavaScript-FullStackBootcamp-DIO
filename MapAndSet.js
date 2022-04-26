function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Carlos', 'Admin');
usuarios.set('Fefo', 'Admin');
usuarios.set('Paulo', 'User');

// console.log(getAdmins(usuarios));

const meuArray = [30, 30, 4, 7, 7, 5, 50, 49, 8, 8, 0];

function uniqueValues(arr) {
    const mySet = new Set(arr);
    return [...mySet];
}

console.log(uniqueValues(meuArray));