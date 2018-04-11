export default function linearSearch(array, input) {
  let attempts = 0;
  const value = parseInt(input, 10);
  for (let i=0; i < array.length; i++) {
    attempts++;
      if (array[i] === value) {
        return i;
      }
  }
  return 'Could not find ' + input + ' in ' + attempts + ' searches';
};