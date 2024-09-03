function memoize(fn) {
    const cache = {};
    return function(x) {
      if (x in cache) {
        return cache[x];
      } else {
        const result = fn(x);
        cache[x] = result;
        return result;
      }
    };
  }
  
  const slowSquare = (n) => {
    for(let i = 0; i < 1000000000; i++) {} // Simular cálculo lento
    return n * n;
  };
  
  const fastSquare = memoize(slowSquare);
  console.log(fastSquare(5)); // Lento en la primera llamada
  console.log(fastSquare(5)); // Rápido en la segunda llamada