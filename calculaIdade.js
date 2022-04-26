function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Fernando",
    idade: 28,
};

const pessoa2 = {
    nome: "Ana",
    idade: 30,
};

const animal = {
    nome: "Roach",
    idade: 2,
};

console.log(calculaIdade.apply(pessoa2, [10]));