angular.module('noServerApp')
.directive('headerDirective', function(){
  return{
    templateUrl: './views/nav-temp.html',
    restrict: 'EA'
  }
})
