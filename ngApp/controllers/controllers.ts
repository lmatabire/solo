namespace app.Controllers {

  export class HomeController {
    public users;
    public user;

    public editUser = function(id){
      console.log("preesdded");
      this.$state.go('edit', {id: id})
    };
    constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService,private jwtHelper,private $rootScope: ng.IRootScopeService) {
      this.$http.get('/users').then((response) => {
        this.users = response.data
      });
      console.log(getRole(jwtHelper,$state,$rootScope));
    }
  }
  export class doctorsController {
    public doctors;
    public doctor;

    public editDoctor = function(id){
      console.log("preesdded");
      this.$state.go('edit', {id: id})
    };
    public param = "Doctor";
    constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService,private jwtHelper,private $rootScope: ng.IRootScopeService) {

      console.log(getRole(jwtHelper,$state,$rootScope));
      this.$http.get('users/by_role/'+ this.param).then((response) => {
        console.log(response);
        this.doctors = response.data
      }, (err)=>{
        console.log(err.data)
      })
    }
  }
  export class patientsController {
    public patients;
    public patient;

    public editPatient = function(id){
      console.log("preesdded")
      this.$state.go('edit', {id: id})
    }
    public param ='Patient';
    constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService,private jwtHelper,private $rootScope: ng.IRootScopeService) {
      console.log(getRole(jwtHelper,$state,$rootScope));
      this.$http.get('users/by_role/'+ this.param).then((response) => {
        console.log(response)
        this.patients = response.data
      }, (err)=>{
        console.log(err.data)
      })
    }
  }
  export class nursesController {
    public nurses;
    public nurse;
    public editNurse = function(id){
      console.log("preesdded");
      this.$state.go('edit', {id: id})
    };
    public param = "Nurse";
    constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService,private jwtHelper,private $rootScope: ng.IRootScopeService) {
      console.log(getRole(jwtHelper,$state,$rootScope));
      this.$http.get('users/by_role/'+this.param).then((response) => {
        console.log(response);

        this.nurses = response.data
      },(err)=>{
        console.log(err.data);
      })
    }
  }
  export class VisitListController {
    public patientVisits;
    public visit;

    public open = function (visit) {
      this.$uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title-top',
        ariaDescribedBy: 'modal-body-top',
        templateUrl: 'ngApp/views/edit-visit.html',
        size: 'lg',
        controller: function ($scope,$http) {
          $scope.visit = visit;
          $scope.update = function(){
            console.log("Saving...", this.visit);
            $http.post('/appointments/update', this.visit).then((response) => {
              this.$state.go('patientVisits');
            },(error) => {
              //error caught
              console.log("Update failed:", error)
            })
          };
        }
      });
    };

    constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService,private jwtHelper,private $rootScope: ng.IRootScopeService,private $uibModal: ng.ui.bootstrap.IModalService) {
      getRole(jwtHelper,$state,$rootScope);
      this.$http.get('/appointments/').then((response) => {
        console.log(response);
        this.patientVisits = response.data
      },(err)=>{
        console.log(err.data)
      })
    }
  }
  export class PatientVisitController {
    public patientVisit;
    public users;
    public doctors;
    public createVisit() {
      console.log("Saving...", this.patientVisit);
        this.$http.post('/appointments/create', this.patientVisit).then((response) => {
          this.$state.go('patientVisits');
        },(error) => {
          //error caught
          console.log("Registration failed:", error)
        })
      }
    constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService,private jwtHelper,private $rootScope: ng.IRootScopeService) {
      getRole(jwtHelper,$state,$rootScope);
      this.$http.get('/users').then((response) => {
        this.users = response.data
      });
      this.$http.get('/users/by_role/Doctor').then((response) => {
        this.doctors = response.data
      })
    }
  }
  export class RegisterController {
  public user;
  public cpassword;
  public register() {
    console.log("registering...",this.user," and cpassword is:",this.cpassword);
    if(this.cpassword == this.user.password){
      this.$http.post('/users/register', this.user).then((response) => {
        this.$state.go('home');
      },(error)=>{
        //error caught
        console.log("Registration failed:",error)
      })
    }else{
      alert("Passwords Do Not Match")
    }
  }

  constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {

  }
}
  export class LoginController {
    public user;

    public login() {
      console.log("loging in...", this.user);
      this.$http.post('/users/login', this.user).then((response) => {
        let token = response.data['token'];
        console.log("token is:", token);
        this.$window.localStorage.token = JSON.stringify(token);
        this.$state.go('home');
      }, (error) => {
        //error caught
        console.log("login failed:", error)
      })
    }
    constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService, private $window) {

    }
  }
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
                private $stateParams: ng.ui.IStateParamsService, private $rootScope: ng.IRootScopeService,private jwtHelper) {
      getRole(jwtHelper,$state,$rootScope);
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
  export function getRole(jwtHelper,$state,$rootScope){
    let role;
    let user;
    if(window.localStorage.getItem("token")) {
      user = jwtHelper.decodeToken(window.localStorage.getItem("token"));
      role = user.role;
      $rootScope.role = role;
      $rootScope.id = user.id;
      window.localStorage.setItem('role',role);
      console.log(role);
      return user;
    }else {
      $state.go('login')
    }
  }
}
