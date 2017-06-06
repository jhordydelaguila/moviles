angular.module('entidadmodulo')

  .factory('entidadcountries', function () {

    function entidadcountries(name, alpha2_code, alpha3_code) {
      this.name = name;
      this.alpha2_code = alpha2_code;
      this.alpha3_code = alpha3_code;
    }

    entidadcountries.build = function (data) {
      if (!data)
        return null;
      return new entidadcountries(data.name, data.alpha2_code, data.alpha3_code);
    };

    entidadcountries.prototype.toJson = function () {
      return angular.toJson(this);
    };

    entidadcountries.fromJsonBunch = function (data) {
      if (angular.isArray(data)) return data.map(entidadcountries.build).filter(Boolean);
      return entidadcountries.build(data);
    };

    return entidadcountries;
  });
