function compose(...fns) {
    return function(x) {
      return fns.reduceRight((acc, fn) => fn(acc), x);
    };
  }
  
  const add1 = (x) => x + 1;
  const double = (x) => x * 2;
  const subtract3 = (x) => x - 3;
  
  const composed = compose(subtract3, double, add1);
  console.log(composed(5)); // Salida: 9