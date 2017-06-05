angular.module('entidadmodulo', [])

  .factory('entiedadlibro', function () {

    function entiedadlibro(puserId, pid, ptitle, pbody) {
      this.userId = puserId;
      this.id = pid;
      this.title = ptitle;
      this.body = pbody;
    }

    entiedadlibro.build = function (data) {
      if (!data)
        return null;
      return new entiedadlibro(data.userId, data.id, data.title, data.body);
    };

    entiedadlibro.prototype.toJson = function () {
      return angular.toJson(this);
    };

    entiedadlibro.fromJsonBunch = function (data) {
      if (angular.isArray(data))
        return data.map(entiedadlibro.build).filter(Boolean);
      return entiedadlibro.build(data);
    };

    return entiedadlibro;
  });
