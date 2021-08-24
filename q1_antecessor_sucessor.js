const prompt = require('prompt-sync')()

/* Escreva um programa que possua uma variável com um número inteiro e
mostre seu antecessor e sucessor.
*/

function main() {
    console.log('Calcular o conceito básico de antecessor e sucessor de dois números.')
    const numero_1 = Number(prompt('Digite aqui o primeiro número: '))
    const numero_2 = Number(prompt('Digite aqui o segundo número: '))

    antecessor = (numero_1 - 1);
    sucessor = (numero_2 + 1);

}

// Cálculo da questão
    console.log('Seu antecessor será: ', antecessor)
    console.log('Seu sucessor será: ', sucessor)

main()
