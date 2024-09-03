const configuracion = (function() {
    var defecto = {
      color: 'azul',
      fontSize: '14px'
    };
  
    return {
      getConfig: function() {
        return defecto;
      },
      setConfig: function(options) {
        Object.assign(defecto, options);
      }
    };
  })();
  
  console.log(configuracion.getConfig()); // Salida: { color: 'azul', fontSize: '14px' }
  
  // Establecer nuevos valores de configuración
  configuracion.setConfig({ color: 'rojo', fontSize: '18px' });
  console.log(configuracion.getConfig()); // Salida: { color: 'rojo', fontSize: '18px' }