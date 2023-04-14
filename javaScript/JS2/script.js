// function declaration ou function statement
function createPhrases () {
  console.log('Estudar e legal')
  console.log('Paciencia e persistencia')
  console.log('Revisao e mae do aprendizado')
}

// executar(execute, run, call, invoke, rodar, chamar, invocar) a função
createPhrases()

// function expression ou function anonymous ou funcao anonima
const sum = function (number1, number2) {
  // number1 e number2 sao parametros
  console.log(number1 + number2)
}

sum(2, 3) // arguments (argumentos)

// forma ludica de entender funcao
function fazerSuco (fruta1, fruta2) {
  return 'suco de:' + fruta1 + fruta2
}
const copo = fazerSuco('banana', 'laranja')
console.log(copo)

// arrow function

const sayMyName = nome => {
  console.log(nome)
}

sayMyName('Vitória')

// callback

function myName (nome) {
  nome()
}

myName(function nome () {
  console.log('Vitória')
})

// constructor
function Person (nome) {
  this.nome = nome
  this.walk = this.nome + ' está andando'
  this.walk2 = function () {
    return this.nome + ' está andando também'
  }
}

// Instancias
const vitoria = new Person('Vitória')
const joao = new Person('Joao')

console.log(vitoria.walk)
console.log(joao.walk2())

// type coersion
console.log('9' + 5)
// type conversion
console.log(Number('9') + 5)

// exemple
let string = '123'
console.log(Number(string))
let number = 123
console.log(String(number))

// criando array com construtor

let myArray = new Array('1', '2', '3')
let myArray2 = new Array(10)
console.log(myArray)
console.log(myArray2)
