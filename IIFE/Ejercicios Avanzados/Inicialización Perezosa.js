const lazyInit = (function() {
    let initialized = false;
  
    return function() {
      if (!initialized) {
        console.log('Inicialización...');
        initialized = true;
      } else {
        console.log('Ya inicializada');
      }
    };
  })();
  
  lazyInit(); // Salida: Inicialización...
  lazyInit(); // Salida: Ya inicializada