//função de verificação de login.
function validarUsuario() {
    let nomeUsuario = prompt("Digite o nome do usuário:");
    let senha = prompt("Digite sua senha:");

    return nomeUsuario === "Leonardo" && senha === "123Antonini";
     // se as condicionais forem true a função sera true. se as condicionais forem false a função sera false.
} 


let continuar = true
while (continuar) { // loop 
    

let acessoPermitido = validarUsuario(); //Guardando o valor boolean dentro da acessoPermitido

if (acessoPermitido) {// se o valor da função for true ele executa esse escopo:
let valorSaque = prompt("Digite o valor do saque:");

            if (valorSaque <= 4500) {
                console.log("Sacando:"+valorSaque); // se a condicional for true o loop se encerra.
                continuar = false //loop encerrado
            } else {
                 console.log("Valor de saque inválido ou saldo insuficiente.");
             }
     // se a função boolean for false esse escopo vai ser executado        
            } else { 
                console.log("Acesso negado");

                let resposta = prompt("deseja Voltar ao inicio?(sim/não)"); //add uma caixa para escrever se deseja voltar
                continuar = resposta === "sim"; // se a resposta for true/ continuar fica true e volta e inicia o loop novamente.
            }
}
