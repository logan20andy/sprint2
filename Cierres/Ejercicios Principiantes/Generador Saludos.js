function greet(nombre) {
    return function(mensaje) {
      console.log(`Hola, ${nombre}! ${mensaje}`);
    };
  }
  
  const greetJohn = greet('John');
  greetJohn('Hello'); // Salida: Hola, John! Hello