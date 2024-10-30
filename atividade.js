/*
faça um algoritmo que receba um 
valor para idade de uma pessoa. Se for menor ou igual a 60,
o algoritmo deve considerar essa pessoa como jovem. Caso contrário, será considerada como velha;


var entrada = require('prompt-sync')()
var idade = entrada("Informe a sua Idade ")

if(idade <= 60){
    console.log("Você é uma pessoa Jovem idade: ",idade) 
    }
    else{
      console.log("Você é uma pessoa Velho idade: ",idade) 
   }
*/

   //faça um algoritmo que receba um número inteiro e afirme se é par ou ímpar;
   var entrada = require('prompt-sync')()
var numero = entrada("Informe um numero: ")
var resto = numero%2
if(parseInt(resto == 0)){
    console.log("Número é Par "+numero)
}else{
    console.log("Número é Impar "+numero) 
}