namespace App.View.Register {
  export function configuration(
    $stateProvider: ng.ui.IStateProvider
  ) {
    // Define routes
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: '/ngApp/views/account/register.html',
        controller: 'RegisterController',
        controllerAs: 'controller'
      });
  }
}
