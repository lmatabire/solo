namespace App {

    angular
        .module('app', [
          // Third Party Modules
          'ui.router',
          'ngResource',
          'ui.bootstrap',
          'angular-jwt',
          // Application Modules
          'app.view'
        ])
        .config(App.configuration)
        .service('RoleManagerService', Services.RoleManagerService )
  }
