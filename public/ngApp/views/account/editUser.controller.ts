namespace App.View.EditUser {

export class EditUserController {
  // Private fields
  // Public fields
  public user;
  // Protected fields

  // Private Properties
  // Public Properties
  //Protected Properties

  // Static fields
  //Static Constructor

  // Constructor
  constructor(
    private RoleManagerService : Services.RoleManagerService,
    private $http: ng.IHttpService,
    private $state: ng.ui.IStateService,
    private $stateParams: ng.ui.IStateParamsService,
    private $rootScope: ng.IRootScopeService
  ) {
    RoleManagerService.getRole();
    if (this.$stateParams['id']) {
      this.$http.get('/users/' + this.$stateParams['id']).then((response) => {
        console.log(response);
        this.user = response.data;
      })
    } else {
      console.log("No id");
      this.$http.get('/users/' + $rootScope.id).then((response) => {
        console.log(response);
        this.user = response.data;
      })
    }
  }
  public editUser() {
    console.log("editing user");
    this.$http.post('/users/update', this.user).then((response) => {
      this.user = response.data;
      this.$state.go('home');
    }, (error) => {
      console.log("edit failed:", error)
    })
  }
}
}
