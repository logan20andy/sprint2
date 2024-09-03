function createCounter() {
    let count = 0;
    return {
      increment: function() {
        count++;
        return count;
      },
      reset: function() {
        count = 0;
      }
    };
  }
  
  const counter = createCounter();
  console.log(counter.increment()); // Salida: 1
  console.log(counter.increment()); // Salida: 2
  counter.reset();
  console.log(counter.increment()); // Salida: 1