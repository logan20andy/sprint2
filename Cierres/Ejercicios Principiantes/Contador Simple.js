function createSimpleCounter() {
    let count = 0;
  
    return function() {
      return ++count;
    };
  }
  
  const counter = createSimpleCounter();
  console.log(counter()); // Salida: 1
  console.log(counter()); // Salida: 2