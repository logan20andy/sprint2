function once(fn) {
    let called = false;
    let result;
    return function(...args) {
      if (!called) {
        called = true;
        result = fn(...args);
      }
      return result;
    };
  }
  
  const logOnce = once((msg) => console.log(msg));
  logOnce("Hola!"); // Salida: Hola!
  logOnce("Hola de nuevo!"); // Sin salida