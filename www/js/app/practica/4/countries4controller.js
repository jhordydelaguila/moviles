angular.module('librosmodule')

  .controller('Countries4Controller', function ($scope, libroservicio) {

    $scope.buscarPais = function (code) {
      libroservicio.obtenerCountries4(code).then(function (response) {
        $scope.paisencontrado = response;
        console.log(response);
      }).catch(function (error) {
        alert('Countries4 no encontrado');
        console.log(error);
      });
      console.log(code);
    }

  });
