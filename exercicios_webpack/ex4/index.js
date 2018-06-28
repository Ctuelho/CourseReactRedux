console.log("ex4")

const produto = {
    nome: 'Caneta Azul',
    preco: 1.90,
    desconto: 0.05
}

function clone (objeto) {
    return { ...objeto }
}

var produto2 = clone (produto)

console.log(produto)
console.log(produto2)