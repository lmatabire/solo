namespace App.View.Login {
  export function configuration(
    $stateProvider: ng.ui.IStateProvider
  ) {
    // Define routes
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: '/ngApp/views/account/login.html',
        controller: 'LoginController',
        controllerAs: 'controller'
      });
  }
}
