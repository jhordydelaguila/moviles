angular.module('librosmodule')

  .controller('Countries7Controller', function ($scope, libroservicio) {

    $scope.buscarPais = function (code) {
      libroservicio.obtenerCountries7(code).then(function (response) {
        $scope.paises = response;
      }).catch(function (error) {
        alert('Countries 7 no encontrado');
        console.log(error);
      });
      console.log(code);
    }

  });
