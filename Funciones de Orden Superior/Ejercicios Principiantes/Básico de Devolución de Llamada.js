function withDelay(callback, delay) {
    setTimeout(callback, delay);
  }
  
  withDelay(() => console.log("Esto se retrasa"), 1000); // Salida después de 1 segundo: "Esto se retrasa"
  