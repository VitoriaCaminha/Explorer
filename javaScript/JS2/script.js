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
