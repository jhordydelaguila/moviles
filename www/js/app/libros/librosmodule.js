angular.module('librosmodule', ['entidadmodulo', 'jsonbookmodulo'])

  .config(function ($stateProvider) {
    $stateProvider

      .state('app.libros', {
        url: '/libros',
        views: {
          'content': {
            templateUrl: 'js/app/libros/libros/libros.html',
            controller: 'libroscontroller',
            resolve: {
              libros: function (libroservicio) {
                return libroservicio.obtenerlibros();
              }
            }
          }
        }
      })

      .state('app.libroDetalle', {
        url: '/libroDetalle',
        views: {
          'content': {
            templateUrl: 'js/app/libros/librodetalle/librodetalle.html',
            controller: 'LlibroDetalleCtrl'
          }
        }
      })

      .state('app.buscar', {
        url: '/librobuscar',
        views: {
          'content': {
            templateUrl: 'js/app/libros/buscarlibro/librobuscar.html',
            controller: 'LlibrobuscarCtrl'
          }
        }
      })

      .state('app.buscarPais', {
        url: '/buscarpais',
        views: {
          'content': {
            templateUrl: 'js/app/paises/buscarpais.html',
            controller: 'BuscarPaisCtrl',
            resolve: {
              paises: function (libroservicio) {
                return libroservicio.obtenerPaises();
              }
            }
          }
        }
      })


  })
/*.state('app.librodetalle', {

 templateUrl: 'js/app/libros/librodetalle/librodetalle.html',
 controller: 'LibroDetalleCtrl'
 url: '/librodetalle/:id',
 views: {
 'content': {
 templateUrl: 'js/app/libros/librodetalle/librodetalle.html',
 controller: 'librodetallecontroller',
 resolve: {
 libro: function (libroservicio ,$stateProvider) {
 return libroservicio.obtenerlibro($stateProvider.id);
 }
 }
 }
 }*/
