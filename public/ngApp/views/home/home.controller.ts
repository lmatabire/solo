namespace App.View.Home {

export class HomeController {
  // Private fields
  // Public fields
  public users;
  public user;
  // Protected fields

  // Private Properties
  // Public Properties
  //Protected Properties

  // Static fields
  //Static Constructor

  // Constructor

  constructor(
    private $http: ng.IHttpService,
    private $state: ng.ui.IStateService,
    private jwtHelper,
    private $rootScope: ng.IRootScopeService
  ) {
    this.$http.get('/users').then((response) => {
      this.users = response.data
    });
  }

    // Private constructor

    //Public Methods
  public editUser(id) {
    console.log("preesdded");
    this.$state.go('edit', { id: id })
  }
  //Protected Methods
  //Private Methods

}
}
