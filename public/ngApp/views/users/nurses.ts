namespace App.View.Nurses {
    angular
        .module('view.nurses', [])
        .config(Nurses.configuration)
        .controller('nursesController', Nurses.nursesController)
  }
