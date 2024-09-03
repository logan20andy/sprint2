function throttle(fn, interval) {
    let lastCall = 0;
    return function(...args) {
      const now = Date.now();
      if (now - lastCall >= interval) {
        lastCall = now;
        fn(...args);
      }
    };
  }
  
  const log = throttle(() => console.log('Throttled!'), 500);
  log();
  log(); // Solo uno "Throttled!" debe aparecer cada 500 ms