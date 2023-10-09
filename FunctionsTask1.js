function getArrayParams(...arr) {

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
    max = arr[i];
    }

    if (arr[i] < min) {
    min = arr[i];
    }

    sum += arr[i];
  }

  const avg = (sum / arr.length).toFixed(2);

  return { max: max, min: min, avg: +avg };  
}

console.log(getArrayParams(-99, 99 , 10))
console.log(getArrayParams(1, 2, 3, -100, 10))
console.log(getArrayParams(5))