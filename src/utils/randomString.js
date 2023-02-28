export function generateRandomString(arr, length) {
    let result = ''
    let lastValue = null
    
    for (let i = 0; i < length; i++) {
      let randomValue = arr[Math.floor(Math.random() * arr.length)]
      
      // Check if the last value is the same as the current value
      while (randomValue === lastValue) {
        randomValue = arr[Math.floor(Math.random() * arr.length)]
      }
      
      result += randomValue + " "
      lastValue = randomValue
    }
    
    return result
  }