const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const randomNumber = Math.round(Math.random() * 10)
let attempts = 1

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

// função callback
function handleTryClick (event) {
  event.preventDefault()
  const inputNumber = document.querySelector('#inputNumber')
  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add('hide')
    screen2.classList.remove('hide')
    screen2.querySelector('h2').innerText = `Acertou em ${attempts} tentativas`
  }

  inputNumber.value = ''
  attempts++
}

function handleResetClick (event) {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
  attempts = 1
}

// eventos

const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
