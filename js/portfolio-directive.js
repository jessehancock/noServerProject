angular.module('noServerApp')
.directive('portfolioDirective', function(){
  return{
    restrict: 'A',
    link: function(scope, element, attr){
      $(document).ready(function(){
        element.on('mouseenter', function(){
          $(element).find('h2').css('opacity', '1');
          $(element).css('background-image', 'white')  
        })

        element.on('mouseleave', function(){
          $(element).find('h2').css('opacity', '0');
        })
      })
    }
  }
})
