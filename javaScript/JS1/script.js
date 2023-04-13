// Comentário em linha

/*
Comentário de bloco
*/

console.log('Hello world!') // comentário em linha também

// Declaracao ou declaration
var nome

// assigment ou atribuicao de valores
nome = 'Vitoria'

// tipo de dado utilizado
console.log(typeof nome)

// agrupamento de declaracoes
let age, isHuman

age = 18
isHuman = true

// multiplos argumentos na funcao
console.log(nome, age, isHuman)

// escrita de texto + variaveis concatenando valores
console.log('o' + nome + 'tem' + age + 'anos.')

// escrita de texto + variaveis interpolando valores com template literal ou template strings
console.log(`o ${nome} tem ${age} anos`)

const person = {
  name: 'John',
  age: 30,
  weight: 88.6,
  idAdmin: true
}

// Acessando valores dentro do objeto
console.log(`${person.name} tem ${person.age} anos.`)

const animals = ['Lion', 'Monkey', { name: 'Cat' }]

// acessando valores dentro do Array
console.log(animals[0])
console.log(animals[2].name)

// Atribuir novos valores a uma posicao espeficia do Array
animals[1] = 'Frog'
