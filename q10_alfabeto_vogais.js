const input = require('prompt-sync')()

/* Escreva um progrma que leia um texto pelo teclado e remova 
todas as suas vogais. Exiba a string resultante.
*/

function main(){

    const letra;
    console.log('Digite aqui uma letra do nosso alfabeto alfanumérico português: ', letra)

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u' || letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U') {
        console.log('É vogal / n')
    }else {
        console.log('É consoante / n')
    }

}

main()