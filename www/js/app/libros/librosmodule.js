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

      .state('app.countries3', {
        url: '/countries3',
        views: {
          'content': {
            templateUrl: 'js/app/practica/3/countries3.html',
            controller: 'Countries3Controller',
            resolve: {
              countries3: function (libroservicio) {
                return libroservicio.obtenerCountries3();
              }
            }
          }
        }
      })

      .state('app.countries4', {
        url: '/countries4',
        views: {
          'content': {
            templateUrl: 'js/app/practica/4/countries4.html',
            controller: 'Countries4Controller'
          }
        }
      })


      .state('app.countries6', {
        url: '/countries6',
        views: {
          'content': {
            templateUrl: 'js/app/practica/6/countries6.html',
            controller: 'Countries6Controller'
          }
        }
      })

      .state('app.countries7', {
        url: '/countries7',
        views: {
          'content': {
            templateUrl: 'js/app/practica/7/countries7.html',
            controller: 'Countries7Controller'
          }
        }
      })


  });
