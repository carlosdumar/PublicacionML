(function() {
	var app = angular.module('storeDumarApp', []);

	app.controller('LogoController', ['$scope', function ($scope) {
		$scope.name = 'hola a todos';
		$scope.urlImg = 'image/logo.png';
	}]);

	app.controller('MenuController', ['$scope', function ($scope) {

		$scope.datosHeader = [			
			{
				optionName: "TIENDA",
				optionUrl: "views/tiendadumar.html"
			}, {
				optionName: "BLOG",
				optionUrl: "views/blog.html"
			}, {
				optionName: "EVENTOS",
				optionUrl: "views/eventos.html"
			}, {
				optionName: "SOCIAL",
				optionUrl: "views/social.html"
			}];		
	}]);

	app.controller('registryController', ['$scope', function ($scope) {
		$scope.entry = 'Ingresar';
		$scope.registry = 'Registrarse';		
	}]);
	
	app.controller('specificationsController', ['$scope', function() {

	}]);
})();