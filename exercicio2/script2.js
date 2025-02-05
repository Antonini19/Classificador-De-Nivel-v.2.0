function ValidacaoDeUsuario(){
    let Programa = true
    while (Programa) {
    
    let nomeDoUsuario = prompt("Digite o nome do usuario:")
    let Senha = prompt("Digite sua senha:")
    if((nomeDoUsuario ==="Leonardo") && (Senha === "123Antonini")){
        Programa = false
        console.log("Autorizado")
   
    }}
}

ValidacaoDeUsuario() === true

if (ValidacaoDeUsuario = false) {
    console.log("Acesso não autorizado")
} else {
    let saque = prompt("digite o valor do saque:")
    if(saque <=4505){
         console.log("sacando....")
         console.log("foi sacado o valor de:R$"+saque)
            }else{
                 console.log("saldo insuficiente")
                }

}


