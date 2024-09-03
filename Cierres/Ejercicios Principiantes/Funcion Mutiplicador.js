function createMultiplier(n) {
    return function(x) {
      return x * n;
    };
  }
  
  const doble = createMultiplier(2);
  console.log(doble(5)); // Salida: 10