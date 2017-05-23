namespace App.View.PatientVisit {
  export function configuration(
    $stateProvider: ng.ui.IStateProvider
  ) {
    // Define routes
    $stateProvider
      .state('patientVisit', {
        url: '/patientVisit',
        templateUrl: '/ngApp/views/patientVisit.html',
        controller: 'PatientVisitController',
        controllerAs: 'controller'
      });
  }
}
