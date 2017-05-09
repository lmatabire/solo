namespace app.Controllers {

  export class HomeController {
    public users;
    public user;
    public editUser = function(id){
      console.log("preesdded")
      this.$state.go('edit', {id: id})
    }
    constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {
      this.$http.get('/users').then((response) => {
        this.users = response.data
      })
    }
  }
  export class PatientVisitController {
    public patientVisit;

    public createVisit() {
      console.log("Saving...", this.patientVisit);
        this.$http.post('/users/register', this.patientVisit).then((response) => {
          this.$state.go('home');
        }, (error) => {
          //error caught
          console.log("Registration failed:", error)
        })
      }
    constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {
    }
  }
  export class LoginController {
    public user;

    public login() {
      console.log("loging in...", this.user);
      this.$http.post('/users/login', this.user).then((response) => {
        let token = response.data;
        console.log("token is:", token)
        this.$state.go('home');
      }, (error) => {
        //error caught
        console.log("login failed:", error)
      })
    }
    constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {

    }
  }
  export class EditUserController {
    public user;

    public editUser() {
      console.log("fhtjfjf fgjgfjgfkn dffdjnn")
      this.$http.post('/users/update', this.user).then((response) => {
        let token = response.data;
        console.log("token is:", token)
        this.$state.go('home');
      }, (error) => {
        console.log("login failed:", error)
      })
    }
    constructor(private $http: ng.IHttpService,
      private $state: ng.ui.IStateService,
      private $stateParams: ng.ui.IStateParamsService) {
      this.$http.get('/users/' + this.$stateParams['id']).then((response) => {
        console.log(response);
        this.user = response.data;
      })
    }
  }

  export class AboutController {
    public user;

    public deleteUser() {
      this.$http.delete('/users/' + this.$stateParams['id']).then((response)=>{
        this.$state.go('home');
      });
    }

    constructor(private $http: ng.IHttpService,
                private $stateParams: ng.ui.IStateParamsService,
                private $state: ng.ui.IStateService) {
                  this.$http.get('/users/' + this.$stateParams['id']).then((response)=>{

                    this.user = response.data;
                  })
                }
  }

}
