namespace App.View.Patients {
export class patientsController {
  public patients;
  public patient;

  public editPatient = function(id) {
    console.log("preesdded")
    this.$state.go('edit', { id: id })
  }
  public param = 'Patient';
  constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService, private jwtHelper, private $rootScope: ng.IRootScopeService) {

    this.$http.get('users/by_role/' + this.param).then((response) => {
      console.log(response)
      this.patients = response.data
    }, (err) => {
      console.log(err.data)
    })
  }
}
}
