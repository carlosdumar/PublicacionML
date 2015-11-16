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
		$scope.titleSpec = 'Solarstorm 5000 Lumen Led Frontal Bicicleta Luz De Bicicleta para Carretera'
		$scope.mainImage = 'image/l2.jpg'
		$scope.specifications = [
			{title: 'Vida LED: 50.000 horas'},
			{title: 'Luz mas condensada, larga exposición.'},
			{title: '4 modos de interrumpción: Debil, Medio, Fuerte, Strober.'},
			{title: 'Tipo de Interruptor: botón azul.'},
			{title: 'Duración: 2-3 horas.'}, 
			{title: 'Localización del interruptor: Cola-casquillo.'},
			{title: 'De alto rendimiento, interruptor electrónico.'},
			{title: 'Haga click en el interruptor para encender / apagar luz'},
			{title: 'Haga click en el interruptor para cambiar los modo de brillo, BAJO-MEDIO-ALTO'},
			{title: 'Mantenga pulsado el interruptor durante más de un segundo para acceder al modo Strobe.'},
			{title: 'Indicador de la bateria (junto al botón azul)'},
			{title: 'Tres luces encendidas en power > 80%'},
			{title: 'Dos luces encendidas en 50 < power < 80%'},
			{title: 'Fuente de alimentación: 1x8.4v 6400mAh'}
		];
		$scope.images = [
			{url: 'image/l10.jpg'},
			{url: 'image/l9.jpg'},
			{url: 'image/l11.jpg'},
			{url: 'image/l6.jpg'}
		];
	}]);
	app.controller('PackageIncludeController', ['$scope', function ($scope) {
		$scope.details = [
			{title: '1 x 5000LM faro unidad del CREE T6 LED'},
			{title: '2 x Anillo de goma para la instalación'},			
			{title: '1 x Cargador de CA 100-240v'},
			{title: '1 x Headband'}
		];
	}]);
})();