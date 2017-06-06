angular.module('librosmodule')

  .controller('Countries6Controller', function ($scope, libroservicio) {

    $scope.buscarPais = function (code) {
      libroservicio.obtenerCountries6(code).then(function (response) {
        $scope.paisencontrado = response;
      }).catch(function (error) {
        alert('Countries6 no encontrado');
        console.log(error);
      });
      console.log(code);
    }

  });
