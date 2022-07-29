/* Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";

 */

//  **** Resolução ****

const Funcionario1: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'joao'
}

// **** Acrescentando Interface Conforme a Aula ****

interface Funcionario {
    codigo: number,
    nome: string,
}

let funcionario2: Funcionario = {
    codigo: 136,
    nome: "Éliton"
}