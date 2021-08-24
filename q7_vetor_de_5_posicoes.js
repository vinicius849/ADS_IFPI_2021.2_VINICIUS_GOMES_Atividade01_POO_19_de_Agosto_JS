const prompt = require('prompt-sync')()

/* Escreva um programa que leia um vetor de 5 posições e
apresente-o na tela.
*/

function main() {
    var n = Number(prompt('Digite o número de elementos que valem n: '))

    const vetor_a = Array(n)
    
    for (let i = 0; i < n; i++) {
        vetor_a[i] = Number(prompt(`Elementos ou posições para um vetor a será ${i}: `))
    }

    console.log(vetor_a)

}

main()