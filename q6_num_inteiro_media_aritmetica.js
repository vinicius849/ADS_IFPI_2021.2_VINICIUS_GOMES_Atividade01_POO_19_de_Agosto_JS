const input = require('prompt-sync')()

/* Escreva um programa que leia uma sequência de números inteiros terminada por -1 
e imprima na tela a soma e a média aritmética destes números. Obs: -1 é
somente um terminador e não deve ser considerado nos cálculos.
*/

function main(){

    console.log('Insira um número inteiro: ')
    var num = Number(input(''))

    var media_A = -1
    var soma = 0
    var i = 1

    while (num >= 0) {
        soma += num
        num = num - i
        media_A++
    }

    console.log(`O resultado da soma de um decaimento do número = ${soma}`)
    console.log(`Resultado da P.A (Progressão Aritmética) = ${soma / media_A}`)

}

main()