// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”

// 6. Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”

// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.


type User = {
    nome:string,
    idade:number,
    ocupacao: string,
    salario: number|string
}

type Director = {
    nome:string,
    idade:number,
    nivel_comissionamento:number,
    salario: number|string
}

export function mostrarUsuario(nome:string, idade:number, ocupacao:string, salario:number): User {
    if(salario){
        console.log(nome + "," + idade + " anos, " + ocupacao + ", salário R$" + salario);
        return{
            nome:nome,
            idade:idade,
            ocupacao:ocupacao,
            salario:salario
        }
    } else {
        console.log(nome + "," + idade + " anos, " + ocupacao + ", salário N/A");
        return{
            nome:nome,
            idade:idade,
            ocupacao:ocupacao,
            salario:'N/A'
        }
    } 
}

export function mostrarDiretor(nome:string, idade:number, nivel_comissionamento:number, salario:number): Director {
    if(salario){           
        console.log("Diretor(a) " + nome + "," + idade + " anos, comissão nível" + nivel_comissionamento + ", salário R$" + salario);
        return{
            nome:nome,
            idade:idade,
            nivel_comissionamento: nivel_comissionamento,
            salario:salario
        }
    } else {
        console.log("Diretor(a) " + nome + "," + idade + " anos, comissão nível" + nivel_comissionamento + ", salário N/A");
        return{
            nome:nome,
            idade:idade,
            nivel_comissionamento: nivel_comissionamento,
            salario:'N/A'
        }
    }
}

type Pessoa = User|Director;

let array:Array<Pessoa> = [];

const p1: Pessoa = {
    nome: "Gustavo",
    idade: 19,
    nivel_comissionamento: 3,
    salario: 2000
}

const p2: Pessoa = {
    nome: "Olivia",
    idade: 17,
    nivel_comissionamento: 5,
    salario: "N/A"
}

const p3: Pessoa = {
    nome: "Paulo",
    idade: 22,
    ocupacao: "Atendente",
    salario: 2000
}

array.push(p1,p2,p3);


export function teste() {
    array.forEach(pessoa => {
        console.log(pessoa);
    });   
}