namespace App.View.About {
  export function configuration(
    $stateProvider: ng.ui.IStateProvider
  ) {
    // Define routes
    $stateProvider
      .state('about', {
        url: '/about/:id',
        templateUrl: '/ngApp/views/about/about.html',
        controller: 'AboutController',
        controllerAs: 'controller'
      });
  }
}
