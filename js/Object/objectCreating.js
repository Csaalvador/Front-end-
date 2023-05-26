/*
function Produto(nome, preco, desc){
    this.nome = nome

    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}

const p1 = new Produto('BMW', 120.00, 0.4)
const p2 = new Produto('GOLF', 150.50, 0.3)

console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

*/
//FUNCÇÃO FACTORY

function gerarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getsalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const p1 = new gerarFuncionario('Cauã', 1800, 2)
p1.getsalario()

console.log(p1)