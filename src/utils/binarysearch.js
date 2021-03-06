export default function binarySearch(array, input, start, end) {
  const value = parseInt(input, 10);
  array = array.sort((a,b) => a - b);

  console.log(array);
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;

  if (start > end) {
      return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item === undefined) {
    return 'Could not find ' + input + ' in ' + index + ' searches';
  }
  if (item === value) {
      return index;
  }
  else if (item < value) {
      return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
      return binarySearch(array, value, start, index - 1);
  }
};