angular.module('librosmodule')

    .controller('libroscontroller', function ($scope, $rootScope, $state, libros) {

        console.log(libros);
        $scope.libros = libros;
     


        $scope.getDetalleLibro = function (objLibro) {
       //     console.log(objLibro);
            $rootScope.objLibro = objLibro;
            $state.go('app.libroDetalle');
        }
    })

  
