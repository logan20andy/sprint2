function compose(...fns) {
    return function(x) {
      return fns.reduceRight((acc, fn) => fn(acc), x);
    };
  }
  
  const add1 = x => x + 1;
  const double = x => x * 2;
  
  const composed = compose(add1, double);
  console.log(composed(5)); // Salida: 11 (double(5) => 10, add1(10) => 11)