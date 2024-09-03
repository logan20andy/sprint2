const singleton = (function() {
    var instance;
  
    function createInstance() {
      return {
        mensaje: 'Hola, soy un singleton'
      };
    }
  
    return {
      getInstance: function() {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  })();
  
  const obj1 = singleton.getInstance();
  const obj2 = singleton.getInstance();
  
  console.log(obj1 === obj2); // Salida: true
  console.log(obj1.mensaje); // Salida: 'Hola, soy un singleton'
  console.log(obj2.mensaje); // Salida: 'Hola, soy un singleton'