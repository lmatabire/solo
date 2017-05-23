namespace App.View.About {

  export class AboutController {
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
      private $http: ng.IHttpService,
      private $stateParams: ng.ui.IStateParamsService,
      private $state: ng.ui.IStateService
    ) {
      this.$http.get('/users/' + this.$stateParams['id'])
        .then((response) => {
          this.user = response.data;
        })
    }

    // Private constructor

    //Public Methods
    public deleteUser() {
      this.$http.delete('/users/' + this.$stateParams['id']).then((response) => {
        this.$state.go('home');
      });
    }
    //Protected Methods
    //Private Methods

  }
}
