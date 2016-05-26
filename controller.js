(function() {
  "use strict";
  angular.module("training")
  .constant('Title', {
    value: 'Simple example of Angularjs 1.5'
  })
  .controller("MainCtrl", ["Title","Urls","dataFactory","$resource", MainCtrl]);
  function MainCtrl(Title,Urls,dataFactory,$resource) {
    
    var that = this;
    that.firstValue = Title.value;
    that.secondValue= Urls.dataPathFlowers;
   
   
    dataFactory.getFlowers().query({},function(data){that.flowers=data});
   
  }
})();