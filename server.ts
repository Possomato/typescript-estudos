function toNumber(value: number | string){
  if(typeof value === 'number'){
    return value
  } else if (typeof value === 'string'){
    return Number(value)
  } else{
    throw 'error - value accepts only number or string'
  }
}

console.log(toNumber(9))