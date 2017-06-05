angular.module('entidadmodulo')

  .factory('entidadpais', function () {

    function entidadpais(name, capital, demonym, population, subregion) {
      this.nombre = name;
      this.capital = capital;
      this.demonym = demonym;
      this.population = population;
      this.subregion = subregion;
    }

    entidadpais.build = function (data) {
      if (!data) return null;
      return new entidadpais(data.name, data.capital, data.demonym, data.population, data.subregion);
    };

    entidadpais.prototype.toJson = function () {
      return angular.toJson(this);
    };

    entidadpais.fromJsonBunch = function (data) {
      if (angular.isArray(data)) return data.map(entidadpais.build).filter(Boolean);
      return entidadpais.build(data);
    };

    return entidadpais;
  });
