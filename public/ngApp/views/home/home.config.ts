namespace App.View.Home {
  export function configuration(
    $stateProvider: ng.ui.IStateProvider
  ) {
    // Define routes
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/ngApp/views/home/home.html',
        controller:'HomeController',
        controllerAs: 'controller'
      });
  }
}
