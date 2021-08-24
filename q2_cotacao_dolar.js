const prompt = require('prompt-sync')()

// Entrada
const cotacao_dolar = Number(prompt('Digite aqui quanto vale o dólar: '))
const quant_dolar = Number(prompt('Diga aqui a quantidade de dólares para serem convertidos: '))

// Meio
const valor_real = cotacao_dolar * quant_dolar

// Fim
console.log('A cotação ou valor-moeda valerá em reais: R$', valor_real)