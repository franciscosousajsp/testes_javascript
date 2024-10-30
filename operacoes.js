var entrada = require('prompt-sync')()

var numero1 = entrada("Informe um número: ")
var numero2 = entrada("Informe outro número: ")

var soma = parseInt(numero1) + parseInt(numero2)

console.log("Resultado da Soma é "+ soma)

var numero1 = entrada("Informe um número: ")
var numero2 = entrada("Informe outro número: ")

var soma = Number(numero1) + Number(numero2)

console.log("Resultado da Soma é "+ soma)