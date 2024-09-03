const myModule = (function() {
    let privateVar = 'secreto';
    let privateMethod = function() {
      console.log('Método privado');
    };
  
    return {
      publicMethod: function() {
        console.log('Método público');
        privateMethod();
        console.log(privateVar);
      }
    };
  })();
  
  myModule.publicMethod();
  // Salida:
  // Método público
  // Método privado
  // secreto