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
  export class doctorsController {
    public doctors;
    public doctor;

    public editDoctor = function(id){
      console.log("preesdded")
      this.$state.go('edit', {id: id})
    }
    public param = "Doctor";
    constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {
      this.$http.get('users/by_role/'+ this.param).then((response) => {
        console.log(response)
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
    constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {
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
      console.log("preesdded")
      this.$state.go('edit', {id: id})
    }
    public param = "Nurse";
    constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {
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
    public patientVisit;

    public editVisit = function(id){

      console.log("preesdded")
      this.$state.go('edit-visit', {id: id})
    }
    public param = 'PatientVisit';

    constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {
      this.$http.get('/patientVisits/by_visit/'+ this.param).then((response) => {
        console.log(response)
        this.patientVisits = response.data
      },(err)=>{
        console.log(err.data)
      })
    }
  }
  export class PatientVisitController {
    public patientVisit;

    public createVisit() {
      console.log("Saving...", this.patientVisit);
        this.$http.post('/patientVisit/create', this.patientVisit).then((response) => {
          this.$state.go('patientVisits');
        },(error) => {
          //error caught
          console.log("Registration failed:", error)
        })
      }
    constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {
    }
  }
  export class RegisterController {
  public user;
  public cpassword
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
