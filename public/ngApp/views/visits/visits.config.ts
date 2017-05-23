namespace App.Views.Visits {
  export function configuration(
    $stateProvider: ng.ui.IStateProvider
  ) {
    // Define routes
    $stateProvider
      .state('patientVisits', {
        url: '/patientVisits',
        templateUrl: '/ngApp/views/visits/patientVisits.html',
        controller: 'VisitListController',
        controllerAs: 'controller'
      })
      .state('patientVisit', {
        url: '/patientVisit',
        templateUrl: '/ngApp/views/patientVisit.html',
        controller: 'PatientVisitController',
        controllerAs: 'controller'
      })
      .state('edit-visit', {
        url: '/edit-visit',
        templateUrl: '/ngApp/views/visits/edit-visit.html',
        controller: 'VisitListController',
        controllerAs: 'controller'
      });
  }
}
