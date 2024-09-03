function timeFunction(fn) {
    const start = Date.now();
    fn();
    const end = Date.now();
    console.log(`La función tomó ${end - start}ms para ejecutar.`);
  }
  
  timeFunction(() => {
    for (let i = 0; i < 1000000; i++) {} // Algún cálculo
  });
  