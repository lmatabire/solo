namespace App.View.Home {

    export class HomeController {
        public users;
        public user;

        public editUser = function (id) {
            console.log("preesdded");
            this.$state.go('edit', { id: id })
        }

        constructor(
            private $http: ng.IHttpService, 
            private $state: ng.ui.IStateService, 
            private jwtHelper, 
            private $rootScope: ng.IRootScopeService
        ) {
            this.$http.get('/users').then((response) => {
                this.users = response.data;
            });
            
            console.log(getRole(jwtHelper, $state, $rootScope));
        }
    }
}