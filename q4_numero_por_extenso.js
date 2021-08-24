const input = input('prompt-sync')()

/* Escreva um programa que apresente o mês por extenso, a partir
de um número digitado pelo usuário(entre 1 e 12). Eis nessa questão uma tupla.
*/

function contador() {
    console.log('Digite aqui um número que indique o mês: ')
    count = ('um', 'dois', 'tres', 'quatro', 'cinco','seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze')

    while (True) {
    num = Number(input('Digite um número entre 1 e 12: '))
    if (1 <= num <= 12)
        break;
    console.log('Tente novamente. ', end='')
    console.log(`Então, a partir do número referência, você quis escrever o mês ${count[]}`)

    }

}

contador()