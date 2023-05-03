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

// alert('Vamos calcular a média de um(a) estudante')
// let student = prompt('Qual o nome do(a) estudante')
// let nota1 = prompt('Qual foi a nota da primeira prova')
// let nota2 = prompt('Qual foi a nota da segunda prova')
// let nota3 = prompt('Qual foi a nota da terceira prova')

// let average = ((Number(nota1) + Number(nota2) + Number(nota3)) / 3).toFixed(2)

// if (average >= 7) {
//   alert(`O(A) estudante ${student} passou com média ${average}!`)
// } else {
//   alert(`O(A) estudante ${student} está em recuperação com média ${average}`)
// }

// let items = []

// for (let i = 0; i < 10; i++) {
//   let itemName = [prompt('Digite o item ' + (i + 1))]
//   items[i] = itemName
// }

// alert('Os nomes digitados foram: ' + items)

// let result = prompt('Adivinhe um número de 0 a 10')
// const randomNumber = Math.round(Math.random() * 10)
// let attempts = 1

// while (Number(result) != randomNumber) {
//   result = prompt('Você errou, tente novamente')
//   attempts++
// }

// alert('Parabéns, você acertou o número em ' + attempts + ' tentativas')

// let userNumber
// let items = []

// while (userNumber != 3) {
//   let userNumber = Number(
//     prompt(`Olá! Digite o número da opção desejada:
//             1. Cadastrar um item na lista;
//             2. Mostrar itens cadastrados;
//             3. Sair do programa`)
//   )

//   if (userNumber == 1) {
//     let item = prompt('Digite o item que você quer cadastrar')
//     items.push(item)
//   } else if (userNumber == 2) {
//     if (items.length == 0) {
//       alert('Não existem itens cadastrados')
//     } else {
//       alert(items)
//     }
//   } else {
//     alert('Até mais!')
//   }
// }

// const patients = [
//   {
//     name: 'Vitória',
//     age: 24,
//     weight: 78,
//     height: 178
//   },
//   {
//     name: 'Luiz',
//     age: 20,
//     weight: 85,
//     height: 180
//   },
//   {
//     name: 'Fernando',
//     age: 29,
//     weight: 70,
//     height: 160
//   }
// ]

// // let patientsNames = []

// // for (let i; i < patients.length; i++) {
// //   patientsNames[i] = patients[i].name
// // }

// // for (let patient of patients) {
// //   patientsNames.push(patient.name)
// // }

// // alert(patientsNames)

// function IMC (weight, height) {
//   return (weight / (height / 100) ** 2).toFixed(2)
// }

// function patientsIMC (patient) {
//   return `
//   Paciente ${patient.name} possui IMC de ${IMC(patient.weight, patient.height)}
//   `
// }

// for (let patient of patients) {
//   let IMCmessage = patientsIMC(patient)
//   alert(IMCmessage)
// }
