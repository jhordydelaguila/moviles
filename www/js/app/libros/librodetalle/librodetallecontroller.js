angular.module('librosmodule')

    .controller('LlibroDetalleCtrl', function ($scope, $rootScope, $state){
        if($rootScope.objlibro !== null || $rootScope.objLibro !== undefined){
            $rootScope.objLibro;
        }else{
            $state.go('app.libros');
        }

      // console.log($rootScope.objLibro);
     

    });