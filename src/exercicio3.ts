// 3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.

type Carteira = {
    saldo: number;
    entradas: number[];
    saidas: number[];
}

const carteira: Carteira = {
    saldo: 500,
    entradas: [],
    saidas: []
}

function lancarEntrada(entrada:number) {
    carteira.entradas.push(entrada);
    carteira.saldo = carteira.saldo + entrada;
}

function lancarSaida(saida:number) {
    carteira.saidas.push(saida);
    carteira.saldo = carteira.saldo - saida;
}

function gerenciaCarteira(){
    console.log(carteira);
}
