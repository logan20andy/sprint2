var miModulo = (function() {
    var miFuncion = function() {
      console.log('Hola, mundo!');
    };
  
    return {
      miFuncion: miFuncion
    };
  })();
  
  miModulo.miFuncion(); // imprime "Hola, mundo!"