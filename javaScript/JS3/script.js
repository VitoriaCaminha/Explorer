// alert('Hello world!')

// // comentário em JS

// let nome = prompt('Digite seu nome')
// alert(`Olá, ${nome}`)

// let number1 = prompt('Digite o primeiro número')
// let number2 = prompt('Digite o segundo número')
// alert(`A soma dos dois números é ${Number(number1) + Number(number2)}`)

// let numberOne = prompt('Digite o primeiro número')
// let numberTwo = prompt('Digite o segundo número')
// numberOne = Number(numberOne)
// numberTwo = Number(numberTwo)
// alert(`A soma dos dois números é: ${numberOne + numberTwo}`)
// alert(`A subtração dos dois números é: ${numberOne - numberTwo}`)
// alert(`A multiplicação dos dois números é: ${numberOne * numberTwo}`)
// alert(`A divisão dos dois números é: ${numberOne / numberTwo}`)

alert('Vamos calcular a média de um(a) estudante')
let student = prompt('Qual o nome do(a) estudante')
let nota1 = prompt('Qual foi a nota da primeira prova')
let nota2 = prompt('Qual foi a nota da segunda prova')
let nota3 = prompt('Qual foi a nota da terceira prova')

let average = ((Number(nota1) + Number(nota2) + Number(nota3)) / 3).toFixed(2)

if (average >= 7) {
  alert(`O(A) estudante ${student} passou com média ${average}!`)
} else {
  alert(`O(A) estudante ${student} está em recuperação com média ${average}`)
}
