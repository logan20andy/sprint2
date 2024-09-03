function debounce(fn, delay) {
    let timeoutId = null;
    return function(...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }
  
  const log = debounce(() => console.log('Debounced!'), 500);
  log();
  log();
  log(); // Solo uno "Debounced!" debe aparecer después de 500 ms