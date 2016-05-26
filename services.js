(function () {
  "use strict";
  angular
  .module("services",["ngResource"])
  .run(function(Urls){
    
  })
  .factory('dataFactory',["$resource","Urls",dataFactory]);
  
  function dataFactory($resource,Urls) {
    
    var factory = {};
    factory.getFlowers = function() { return  $resource(Urls.dataPathFlowers); };
    factory.save = function() {};
    return factory;
}
  
  
  
  
  
    
}());