namespace App.View.EditVisit {
  export function configuration(
    $stateProvider: ng.ui.IStateProvider
  ) {
    // Define routes
    $stateProvider
      .state('edit-visit', {
        url: '/edit-visit',
        templateUrl: '/ngApp/views/visits/edit-visit.html',
        controller: 'VisitListController',
        controllerAs: 'controller'
      });
  }
}
