namespace App.View.Nurses {
  export function configuration(
    $stateProvider: ng.ui.IStateProvider
  ) {
    // Define routes
    $stateProvider
      .state('nurses', {
        url: '/nurses',
        templateUrl: '/ngApp/views/users/nurses.html',
        controller: 'nursesController',
        controllerAs: 'controller'
      });
  }
}
