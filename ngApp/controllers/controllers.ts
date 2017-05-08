namespace app.Controllers {

    export class HomeController {
        public users;

        constructor(private $http: ng.IHttpService){
          this.$http.get('/users').then((response)=>{
            this.users = response.data
          })
        }
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
    export class EditUserController {
        public users;
        public getUser(){
        this.$http.get('/users').then((response)=>{
          this.users = response.data;
          console.log(response);
        })
        this.getUser();
      }
        public editUser() {
            this.$http.put('/users', this.users).then((response) =>{
              this.$state.go('home')
            })
        }

        constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService,private $stateParams: ng.ui.IStateParamsService) {

      }
        // constructor(private $http: ng.IHttpService,private $state: ng.ui.IStateService)
            // private $stateParams: ng.ui.IStateParamsService) {
            //   this.$http.get('/users' + this.$stateParams['id']).then((response)=>{
            //     this.user = response.data;
            //   })
            // }
    }

    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
