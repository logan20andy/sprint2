const module = (function() {
    var privateVar = 0;
  
    return {
      getVar: function() {
        return privateVar;
      },
      setVar: function(value) {
        privateVar = value;
      }
    };
  })();
  
  console.log(module.getVar()); // Salida: 0
  
  module.setVar(42);
  console.log(module.getVar()); // Salida: 42