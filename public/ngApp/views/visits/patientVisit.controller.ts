namespace App.View.PatientVisit {

  export class PatientVisitController {
    // Private fields
    // Public fields
    public patientVisit;
    public users;
    public doctors;
    public createVisit() {
      console.log("Saving...", this.patientVisit);
      this.$http.post('/appointments/create', this.patientVisit).then((response) => {
        this.$state.go('patientVisits');
      }, (error) => {
        //error caught
        console.log("Registration failed:", error)
      })
    }
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
      private jwtHelper,
      private $rootScope: ng.IRootScopeService
    ) {
      RoleManagerService.getRole();
      this.$http.get('/users').then((response) => {
        this.users = response.data
      });
      this.$http.get('/users/by_role/Doctor').then((response) => {
        this.doctors = response.data
      })
    }
  }

}
