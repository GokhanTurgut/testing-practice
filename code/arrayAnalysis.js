function analyze(array) {
  let total = 0;
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
    if (array[i] < min) {
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
  }

  let average = total / array.length;

  return {
    average: average,
    min: min,
    max: max,
    length: array.length,
  };
}

export default analyze;
