const prompt = require('prompt-sync')()

/* Escrever um programa que leia três valores inteiros e 
apresente o menor dos valores lidos
*/

// Começo da questão

function numeracao(){
    console.log('Escreva 3 números e diga qual é o menor deles: ')
    var n1 = Number(prompt('Primeiro número: '))
    var n2 = Number(prompt('Segundo número: '))
    var n3 = Number(prompt('Terceiro número: '))

// Verificar Estruturas Condicionais
    if (n1 < n2) {
        console.log('Número 1 é menor.')
    }
    if (n2 < n3) {
        console.log('Número 2 é menor.')
    }
    if (n1 < n3) {
        console.log('Número 1 é o menor entre os 3 números lidos.')
    }

}

numeracao()