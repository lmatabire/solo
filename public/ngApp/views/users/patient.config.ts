namespace App.View.Patients {
  export function configuration(
    $stateProvider: ng.ui.IStateProvider
  ) {
    // Define routes
    $stateProvider
      .state('patients', {
        url: '/patients',
        templateUrl: '/ngApp/views/users/patients.html',
        controller: 'patientsController',
        controllerAs: 'controller'
      });
  }
}
