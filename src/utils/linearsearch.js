export default function indexOf(array, value) {
  for (let i=0; i<array.length; i++) {
      if (array[i] == value) {
          return i;
      }
  }
  return -1;
};