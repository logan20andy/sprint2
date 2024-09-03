function filterArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  const números = [1, 2, 3, 4, 5];
  const evens = filterArray(números, x => x % 2 === 0);
  console.log(evens); // Salida: [2, 4]