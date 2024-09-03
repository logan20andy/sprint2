function customMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }
  
  const numbers = [1, 2, 3];
  const doubled = customMap(numbers, x => x * 2);
  console.log(doubled); // Salida: [2, 4, 6]