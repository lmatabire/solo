namespace App.View.EditVisit {

  export class VisitListController {
    // Private fields
    // Public fields
    public patientVisits;
    public visit;
    // Protected fields

    // Private Properties
    // Public Properties
    //Protected Properties

    // Static fields
    //Static Constructor

    // Constructor
    public open(visit) {
      this.$uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title-top',
        ariaDescribedBy: 'modal-body-top',
        templateUrl: 'ngApp/views/edit-visit.html',
        size: 'lg',
        controller: function($scope, $http) {
          $scope.visit = visit;
          $scope.update = function() {
            console.log("Saving...", this.visit);
            $http.post('/appointments/update', this.visit).then((response) => {
              this.$state.go('patientVisits');
            }, (error) => {
              //error caught
              console.log("Update failed:", error)
            })
          };
        }
      });
    };

    constructor(
      private RoleManagerService : Services.RoleManagerService,
      private $http: ng.IHttpService,
      private $state: ng.ui.IStateService,
      private jwtHelper,
      private $rootScope: ng.IRootScopeService,
      private $uibModal: ng.ui.bootstrap.IModalService
    ) {
      RoleManagerService.getRole();
      this.$http.get('/appointments/').then((response) => {
        console.log(response);
        this.patientVisits = response.data
      }, (err) => {
        console.log(err.data)
      })
    }
  }

}
