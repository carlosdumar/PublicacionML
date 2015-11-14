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
		$scope.titleSpec = 'LAMPARA DE 5 LEDS PARA BICICLETA'
		$scope.mainImage = 'image/mainImage.jpg'
		$scope.specifications = [
			{title: 'A prueba de agua'},
			{title: 'Con tecnologia de centrado'},
			{title: 'Soporte desmontable'},
			{title: 'Modo de operación: continuo o Flash, modo de cambio pulsando el botón en la parte superior'},
			{title: 'Multi-funcional: la luz de la bici, Antorcha, buceo (hasta 20 metros / 66 ft.)'}, 
			{title: 'De larga duración: hasta 150 horas de funcionamiento con 4 pilas "AAA" (no incluidas)'},
			{title: 'Color: Negro'},
			{title: 'Peso: 46.6g'}
		];
		$scope.images = [
			{url: 'image/secondImage1.jpg'},
			{url: 'image/secondImage2.jpg'},
			{url: 'image/secondImage3.jpg'},
			{url: 'image/secondImage4.jpg'}
		];
	}]);
	app.controller('PackageIncludeController', ['$scope', function ($scope) {
		$scope.details = [
			{title: '1 x Bike Head Light'}
		];
	}]);
})();