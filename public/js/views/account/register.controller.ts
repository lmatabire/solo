namespace app.Controllers {

  export class RegisterController {
    public user;
    public cpassword;
    public register() {
      console.log("registering...", this.user, " and cpassword is:", this.cpassword);
      if (this.cpassword == this.user.password) {
        this.$http.post('/users/register', this.user).then((response) => {
          this.$state.go('home');
        }, (error) => {
          //error caught
          console.log("Registration failed:", error)
        })
      } else {
        alert("Passwords Do Not Match")
      }
    }

    constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {

    }
  }
  }