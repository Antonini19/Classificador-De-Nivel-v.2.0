let nomeDoHeroi = prompt("Digite o nome do seu heroi:")
let monstros = prompt("digite a quantidade de mosntros que matou:")
let xpColetado = monstros * 150

if (xpColetado<1000) {
    Nivel = "ferro"
} else if ((xpColetado>1001) && (xpColetado<2000)) {
    Nivel = "Bronze"
} else if((xpColetado >2001) && (xpColetado<5000)){
    Nivel = "Prata"
}else if((xpColetado >5001) && (xpColetado<7000)){
    Nivel = "Ouro"
}else if((xpColetado >7001) && (xpColetado<8000)){
    Nivel = "Platina"
}else if((xpColetado >8001) && (xpColetado<9000)){
    Nivel = "Ascendente"
}else if((xpColetado >9001) && (xpColetado<10000)){
    Nivel = "Imortal"
}else if(xpColetado>10001){
    Nivel = "Radiante"
}

console.log(
    ["\nO Herói de nome:"+nomeDoHeroi]+
    ["\nEstá no nivel de:"+Nivel]+
    ["\nQuantidade de Mosntros mortos:"+monstros]+
    ["\nXp adquerido:"+xpColetado]
    )