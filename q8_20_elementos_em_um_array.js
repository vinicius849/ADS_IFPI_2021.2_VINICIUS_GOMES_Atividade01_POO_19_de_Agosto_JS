const prompt = require('prompt-sync')()

/* Escreva um programa que leia e mostre um vetor de 20 elementos inteiros. 
A seguir, conte quantos valores pares existem no vetor.
*/

function main() {
    var n = Number(prompt('Digite o número de elementos que valem n: '))

    const vetor_a = Array(n)
    
    for (let i = 0; i < n; i++) {
        vetor_a[i] = Number(prompt(`Elementos ou posições para um vetor a será ${i}: `))
    }
    if (n % 2 === 0) {
        console.log('Seleciona números pares de 0 a 20.')
    }else {
        console.log('O número é ímpar.')
    }

    console.log(vetor_a)

}

main()