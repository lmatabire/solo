namespace app.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
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
        console.log("loging in...",this.user);
          this.$http.post('/users/login', this.user).then((response) => {
            let token = response.data;
            console.log("token is:",token)
            this.$state.go('home');
          },(error)=>{
            //error caught
            console.log("login failed:",error)
          })
      }
      constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {

      }
    }
    export class Patients {
        public patient;

    }

    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
