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

	app.controller('SpecificationsController', ['$scope', function ($scope) {
		$scope.titleSpec = 'Sombrero de bruja para niños Halloween'
		$scope.mainImage = 'image/hat4.jpg'
		$scope.specifications = [
			{title: 'Material: Tela de raso'},
			{title: 'Color: Azul, Rojo, Negro, Amarillo, Naranja, Rosa'},
			{title: 'Tamaño: D37cm*D18cm*H35cm/14.57*7.09*13.78inch'},
			{title: 'Colorido puntiagudo sombrero de bruja con estrellas de oro'},
			{title: 'Una talla para la mayoría de los niños'},
			{title: 'Es conveniente para el partido, demostración, máscara del partido / traje'},
			{title: 'Son coloridos y son muy adecuados para los niños'}
		];
		$scope.images = [
			{url: 'image/hat1.jpg'},
			{url: 'image/hat2.jpg'},
			{url: 'image/hat3.jpg'}
		];
	}]);
	app.controller('PackageIncludeController', ['$scope', function ($scope) {
		$scope.details = [
			{title: '1x Kids Wizard Hat'}
		];
	}]);
})();
