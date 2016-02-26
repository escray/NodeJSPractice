var modules = [];

var v = function(modules) {
  // Check all modules for deduplicated modules
  for(var i in modules) {
    if(Object.prototype.hasOwnProperty.call(modules, i)) {
      switch(typeof modules[i]) {
        case "function": break;
        case "object":
          // Module can be created from a template
          modules[i] = (function(_m) {
            var args = _m.slice(1), fn = modules[_m[0]];
            return function (a,b,c) {
              fn.apply(this, [a,b,c].concat(args)); // Breaks here
            };
          }(modules[i]));
          break;
        default:
          // Module is a copy of another module
          modules[i] = modules[modules[i]];
          break;
      }
    }
  }
  return modules;
}