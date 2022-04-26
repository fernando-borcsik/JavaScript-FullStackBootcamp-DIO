function comparison(a, b) {
    (a === b) ? console.log(`Os números ${a} e ${b} são iguais. `) : console.log(`Os números ${a} e ${b} não são iguais. `);
    const s = a + b;
    (s > 20) ? console.log(`Sua soma é ${s}, que é maior que 20`) : (s > 10) ? console.log(`Sua soma é ${s}, que está entre 10 e 20`) : console.log(`Sua soma é ${s}, que é menor que 10`);
}

comparison(2, 12);