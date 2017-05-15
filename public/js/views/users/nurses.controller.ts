namespace app.Controllers {
    export class nursesController {
        public nurses;
        public nurse;
        public editNurse = function (id) {
            console.log("preesdded");
            this.$state.go('edit', { id: id })
        };
        public param = "Nurse";
        constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService, private jwtHelper, private $rootScope: ng.IRootScopeService) {
            console.log(getRole(jwtHelper, $state, $rootScope));
            this.$http.get('users/by_role/' + this.param).then((response) => {
                console.log(response);

                this.nurses = response.data
            }, (err) => {
                console.log(err.data);
            })
        }
    }
}