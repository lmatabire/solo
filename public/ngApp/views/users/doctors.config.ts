namespace App.View.Doctors {
  export function configuration(
    $stateProvider: ng.ui.IStateProvider
  ) {
    // Define routes
    $stateProvider
      .state('doctors', {
        url: '/doctors',
        templateUrl: '/ngApp/views/users/doctors.html',
        controller: 'doctorsController',
        controllerAs: 'controller'
      });
  }
}
