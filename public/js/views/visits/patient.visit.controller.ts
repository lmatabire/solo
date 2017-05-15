namespace app.Controllers {

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
}