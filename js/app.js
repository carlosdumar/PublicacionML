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
		$scope.titleSpec = 'Soporte Para Teléfono Celular para Carro'
		$scope.mainImage = 'image/support.jpg'
		$scope.specifications = [
			{title: 'Material: Plastico'},
			{title: 'Color: Azul, Negro'},
			{title: 'Abrir y cerrar libremente, de fácil instalación'},
			{title: 'Colocado en la salida del coche, propicio al calor, conveniente para operar'},
			{title: 'No va a bloquear la vista, el cumplimiento de las normas de tráfico'},
			{title: 'Fácil desmontaje e instalación en la salida del coche de aire acondicionado'},
			{title: 'Se puede girar 360 grados, fácil de ajustar a cualquier ángulo de visión'},
			{title: 'Anchura de apoyo móvil entre 5-8 cm.'}
		];
		$scope.images = [
			{url: 'image/support2.jpg'},
			{url: 'image/support3.jpg'},
			{url: 'image/support4.jpg'},
			{url: 'image/support5.jpg'}
		];
	}]);
	app.controller('PackageIncludeController', ['$scope', function ($scope) {
		$scope.details = [
			{title: 'Soporte para teléfono 1 x mini salida de aire de salida'}
		];
	}]);
})();
