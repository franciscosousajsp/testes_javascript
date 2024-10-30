// Importando a biblioteca 'prompt-sync'
var prompt = require('prompt-sync')();

function comprarPassagem() {
    const destinos = ["Rio de Janeiro", "São Paulo", "Salvador"];

    // Seleção de destino
    let destino = parseInt(prompt("Selecione o destino: \n1 - Rio de Janeiro\n2 - São Paulo\n3 - Salvador\n"));
    destino = destinos[destino - 1];  // Convertendo a escolha numérica em nome de destino

    // Seleção de data
    const data = prompt("Informe a data da viagem (ex: 2024-09-20): ");

    // Seleção de horário
    const horario = prompt("Informe o horário da viagem (ex: 14:30): ");

    // Número de passageiros
    const passageiros = parseInt(prompt("Informe o número de passageiros: "));

    // Cálculo do total (suponha que cada passagem custa R$ 100,00)
    const precoPorPassageiro = 100;
    const total = passageiros * precoPorPassageiro;

    // Exibindo os detalhes da compra
    console.log("\nDetalhes da Compra:");
    console.log(`Destino: ${destino}`);
    console.log(`Data: ${data}`);
    console.log(`Horário: ${horario}`);
    console.log(`Número de Passageiros: ${passageiros}`);
    console.log(`Total: R$ ${total.toFixed(2)}`);
}

// Executar a função
comprarPassagem();
