function validarUsuario() {
    let nomeUsuario = prompt("Digite o nome do usuário:");
    let senha = prompt("Digite sua senha:");

    return nomeUsuario === "Leonardo" && senha === "123Antonini";
}
let continuar = true
while (continuar) {
    

let acessoPermitido = validarUsuario();

if (acessoPermitido) {
let valorSaque = prompt("Digite o valor do saque:");

            if (valorSaque <= 4500) {
                console.log("Sacando:"+valorSaque);
                continuar = false
            } else {
                 console.log("Valor de saque inválido ou saldo insuficiente.");
             }
    } else {
    console.log("Acesso negado");
    let resposta = prompt("deseja Voltar ao inicio?(sim/não)");
        continuar = resposta === "sim";
    }
}
