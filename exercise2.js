const input = document.querySelector('input')
const response = document.querySelector('p')

const inputLocal = localStorage.getItem('input')
input.value = inputLocal
handleCalculate(Number(inputLocal))

function valueChanged(){
  const inputNumber = Number(input.value)
  localStorage.setItem('input', inputNumber)
  handleCalculate(inputNumber)
}

function handleCalculate(value){
  response.innerHTML = `result: ${value + 100 * 0.2}`
}

input.addEventListener('keyup', valueChanged)