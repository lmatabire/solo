namespace App.View.EditUser {
  export function configuration(
    $stateProvider: ng.ui.IStateProvider
  ) {
    // Define routes
    $stateProvider
      .state('edit', {
        url: '/edit/:id',
        templateUrl: '/ngApp/views/account/editUser.html',
        controller: 'EditUserController',
        controllerAs: 'controller'
      });
  }
}
