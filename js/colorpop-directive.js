angular.module('noServerApp')
.directive('colorPop', function(){
  return{
    restrict: 'EA',
      link: function(scope, element, attr){
      $(document).ready(function(){
      $('.colorrr').click(function(){
        $(this).toggleClass('maroon');
      });
      })
    }
  }
})
