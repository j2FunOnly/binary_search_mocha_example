// target - искомый элемент, arr - упорядоченный массив, в котором ищем.
function binarySearch(target, arr) {
  var head = 0,
    tail = arr.length,
    middle;

  while (head < tail) {
    middle = Math.floor((head + tail) / 2);

    // На выходе индекс искомого элемента.
    if (target === arr[middle]) return middle;

    if (target < arr[middle]) {
      tail = middle - 1;
    } else {
      head = middle + 1;
    }
  }

  // Если искомого элемента нет в массиве, то -1.
  return -1;
}

module.exports = binarySearch;
