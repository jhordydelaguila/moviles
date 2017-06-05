angular.module('librosmodule')

    .controller('LlibrobuscarCtrl', function ($scope , libroservicio){
     $scope.buscarLibro = function (id){
         libroservicio.obtenerlibro(id).then(function (response){
             $scope.libroEncontrado = response;
         }).catch(function (error){
             alert('Libro no encontrado');
             console.log(error);
         })
         console.log(id);
     }

    });