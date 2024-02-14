const nome = "LeoKS";
let nome2 = "";
let pessoaDefault = {
    nome: "LeoKS",
    idade: "21",
    trabalho: "desempregado"
}

let nomes = ["Leoks", "Marcelo Eltz", "Pedro Silva"];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "LeoKS",
        idade: "21",
        trabalho: "desempregado"
    },
    {
        nome: "Maria Silva",
        idade: "25",
        trabalho: "UX/UI Designer"
    }
];

function alterarNome() {
    nome2 = "Maria Silva"
    console.log("valor alterado:")
    console.log(nome2); 
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome
    console.log("valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("nome:");
    console.log(pessoa.nome);

    console.log("idade:");
    console.log(pessoa.idade);

    console.log("trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);

}

function imprimirPessoas() {
    console.log("-------IMPRIMIR PESSOAS-----------")
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("idade:");
        console.log(item.idade);

        console.log("trabalho:");
        console.log(item.trabalho);
  
    })
}

imprimirPessoas();

adicionarPessoa ({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"
});

imprimirPessoas();

//imprimirPessoa(pessoaDefault);

// imprimirPessoa({
//     nome: "Maria Silva",
//     idade: "25",
//     trabalho: "UX/IU Designer"
// });

//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarNome();