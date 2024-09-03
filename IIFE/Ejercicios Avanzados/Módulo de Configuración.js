const config = (function() {
    let settings = {};
  
    return {
      set: function(key, value) {
        settings[key] = value;
      },
      get: function(key) {
        return settings[key];
      }
    };
  })();
  
  config.set('tema', 'oscuro');
  console.log(config.get('tema')); // Salida: oscuro