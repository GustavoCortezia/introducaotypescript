// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.


type Produto = {
    id:number,
    nome: string,
    preco: number
}

const produtos: Array<Produto> = []

let id: number = 1

export function cadastrarProduto(nome:string, preco:number) {
    produtos.push({id:id, nome:nome, preco:preco});
    id++;
}

export function listarProdutos() {
    console.log(produtos);
}

export function excluirProduto(id:number) {
    for (let i = 0; i < produtos.length; i++) {
        if(produtos[i].id = id) {
            produtos.splice(i);
        }
        
    }
}