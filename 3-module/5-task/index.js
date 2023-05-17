function getMinMax(str) {
  const numbers = str.split(' ')
  .map(parseFloat)
  .filter(item => !Number.isNaN(item));

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return {
    min: min,
    max: max
  };
}
