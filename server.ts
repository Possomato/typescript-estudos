const input = document.querySelector('input')
const response = document.querySelector('p')

const inputLocal = localStorage.getItem('input')
if(input && inputLocal){
  input.value = inputLocal
  handleCalculate(Number(inputLocal))
}

function valueChanged(){
  if(input){
    let inputNumber = input.value
    localStorage.setItem('input', inputNumber)
    handleCalculate(Number(inputNumber))
  }
}

function handleCalculate(value: number){
  if(response){
    response.innerHTML = `result: ${value * 0.8 + 100}`
  }
}

if(input){
  input.addEventListener('keyup', valueChanged)
}