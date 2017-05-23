namespace App.View.Login {
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
}
