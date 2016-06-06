angular.module('noServerApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');


  $stateProvider
   .state
	('home', {
    url: '/home',
    templateUrl: './views/home.html'
   })
  .state('skills', {
    url: '/skills',
    templateUrl: './views/skills.html'
   })
   .state('about', {
    url: '/about',
    templateUrl: './views/about.html'
   })
   .state('portfolio', {
    url: '/portfolio',
    templateUrl: './views/portfolio.html'
   })
   .state('egg', {
    url: '/egg',
    templateUrl: './views/dino-egg.html'
   })
})
