
function saldoRankeadas(quantidadeVitorias, quantidadeDerrotas){
    let nivelJogador = ""
    let SaldoVitorias = quantidadeVitorias - quantidadeDerrotas
    

    if (SaldoVitorias < 10){
        nivelJogador = "FERRO"
    } else if (SaldoVitorias >= 11 && SaldoVitorias < 20){
        nivelJogador = "Bronze"
    } else if (SaldoVitorias > 20 && SaldoVitorias<=50){
        nivelJogador = "Prata"
    } else if (SaldoVitorias > 50 && SaldoVitorias<=80){
        nivelJogador = "Ouro"
    } else if (SaldoVitorias > 80 && SaldoVitorias<=90){
        nivelJogador = "Diamante"
    } else if (SaldoVitorias > 90 && SaldoVitorias<=100){
        nivelJogador = "Lendário"
    } else {
        SaldoVitorias >= 101
        nivelJogador = "Imortal"
    }
    console.log("O Herói tem o saldo de " + SaldoVitorias + " Vítorias e está no nivel de " + nivelJogador);
}
saldoRankeadas(10,0)