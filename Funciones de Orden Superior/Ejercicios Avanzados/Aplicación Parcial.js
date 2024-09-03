function partial(fn, ...presetArgs) {
    return function(...remainingArgs) {
      return fn(...presetArgs, ...remainingArgs);
    };
  }
  
  const add = (a, b, c) => a + b + c;
  const add5 = partial(add, 5);
  
  console.log(add5(10, 15)); // Salida: 30