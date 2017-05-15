namespace app.Controllers {

  export class EditUserController {
    public user;
    public editUser() {
      console.log("fhtjfjf fgjgfjgfkn dffdjnn");
      this.$http.post('/users/update', this.user).then((response) => {
        this.user = response.data;
        this.$state.go('home');
      }, (error) => {
        console.log("edit failed:", error)
      })
    }

    constructor(private $http: ng.IHttpService,
      private $state: ng.ui.IStateService,
      private $stateParams: ng.ui.IStateParamsService, private $rootScope: ng.IRootScopeService, private jwtHelper) {
      getRole(jwtHelper, $state, $rootScope);
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
  }
}