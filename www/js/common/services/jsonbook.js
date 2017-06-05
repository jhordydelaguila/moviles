angular.module('jsonbookmodulo', ['entidadmodulo'])

  .factory('libroservicio', function ($http, $q, entiedadlibro, entidadpais) {
    var libroservicio = {};

    libroservicio.libros = [];
    libroservicio.libroseleccionado = null;

    libroservicio.obtenerlibros = function () {
      var deferred = $q.defer();

      $http.get('https://jsonplaceholder.typicode.com/posts', {}).then(
        function (response) {
          libroservicio.libros = entiedadlibro.fromJsonBunch(response.data);
          deferred.resolve(libroservicio.libros);
        },
        function (error) {
          deferred.reject();
        }
      );

      return deferred.promise;
    };

    libroservicio.obtenerlibro = function (id) {
      var deferred = $q.defer();
      $http.get('https://jsonplaceholder.typicode.com/posts/' + id, {}).then(
        function (response) {
          libroservicio.libroseleccionado = entiedadlibro.build(response.data);
          deferred.resolve(libroservicio.libroseleccionado);
        },
        function (error) {
          deferred.reject();
        }
      );

      return deferred.promise;

    };

    //funcion para obtener los paises
    libroservicio.obtenerPaises = function () {
      var deferred = $q.defer();

      $http.get('http://restcountries.eu/rest/v2/all', {}).then(
        function (response) {
          libroservicio.libros = entidadpais.fromJsonBunch(response.data);
          deferred.resolve(libroservicio.libros);
        },
        function (error) {
          deferred.reject();
        }
      );

      return deferred.promise;
    };

    //obtener pais
    libroservicio.obtenerPais = function (pais) {
      var deferred = $q.defer();

      $http.get('http://restcountries.eu/rest/v2/name/' + pais, {}).then(
        function (response) {
          libroservicio.libroseleccionado = entidadpais.build(response.data[0]);
          deferred.resolve(libroservicio.libroseleccionado);
        },
        function (error) {
          deferred.reject();
        }
      );
      return deferred.promise;
    };


    return libroservicio;
  })
