var contador = (function() {
    var count = 0;
  
    return {
      increment: function() {
        count++;
      },
      getCount: function() {
        return count;
      }
    };
  })();
  
  // Después de la inicialización
  contador.increment();
  console.log(contador.getCount()); // Output: 1