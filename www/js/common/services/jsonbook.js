angular.module('jsonbookmodulo', ['entidadmodulo'])

  .factory('libroservicio', function ($http, $q, entiedadlibro, entidadpais, entidadcountries) {
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
          libroservicio.libroseleccionado = entidadpais.build(response.data);
          deferred.resolve(libroservicio.libroseleccionado);
        },
        function (error) {
          deferred.reject();
        }
      );
      return deferred.promise;
    };

    //funcion de countries3
    libroservicio.obtenerCountries3 = function () {
      var deferred = $q.defer();

      $http.get('http://services.groupkt.com/country/get/all', {}).then(
        function (response) {
          libroservicio.libros = entidadcountries.fromJsonBunch(response.data.RestResponse.result);
          deferred.resolve(libroservicio.libros);
        },
        function (error) {
          deferred.reject();
        }
      );
      return deferred.promise;
    };

    //funcion de countries4
    libroservicio.obtenerCountries4 = function (code) {
      var deferred = $q.defer();

      $http.get('http://services.groupkt.com/country/get/iso2code/' + code, {}).then(
        function (response) {
          libroservicio.libroseleccionado = entidadcountries.build(response.data.RestResponse.result);
          deferred.resolve(libroservicio.libroseleccionado);
        },
        function (error) {
          deferred.reject();
        }
      );
      return deferred.promise;
    };

    //funcion de countries6
    libroservicio.obtenerCountries6 = function (code) {
      var deferred = $q.defer();

      $http.get('http://services.groupkt.com/country/get/iso3code/' + code, {}).then(
        function (response) {
          libroservicio.libroseleccionado = entidadcountries.build(response.data.RestResponse.result);
          deferred.resolve(libroservicio.libroseleccionado);
        },
        function (error) {
          deferred.reject();
        }
      );
      return deferred.promise;
    };

    //funcion de countries7
    libroservicio.obtenerCountries7 = function (code) {
      var deferred = $q.defer();

      $http.get('http://services.groupkt.com/country/search?text=' + code, {}).then(
        function (response) {
          libroservicio.libroseleccionado = entidadcountries.fromJsonBunch(response.data.RestResponse.result);
          deferred.resolve(libroservicio.libroseleccionado);
        },
        function (error) {
          deferred.reject();
        }
      );
      return deferred.promise;
    };


    return libroservicio;
  });
