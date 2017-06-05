angular.module('librosmodule')

  .controller('BuscarPaisCtrl', function ($scope, libroservicio, paises) {

    $scope.paises = paises;

    $scope.buscarPais = function (pais) {
      libroservicio.obtenerPais(pais).then(function (response) {
        $scope.paisEncontrado = response;
        //console.log(response);
      }).catch(function (error) {
        alert('País no encontrado');
        console.log(error);
      });
      console.log(pais);
    }

  });
