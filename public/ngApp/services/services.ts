
namespace App.Services {
  export class RoleManagerService {

      constructor(
        private jwtHelper,
        private $state,
        private $rootScope,
        private $window
      ){

      }

     public getRole(){
      let role;
      let user;

      if(this.$window.localStorage.getItem("token")) {
        user = this.jwtHelper.decodeToken(this.$window.localStorage.getItem("token"));
        role = user.role;
        this.$rootScope.role = role;
        this.$rootScope.id = user.id;
        this.$window.localStorage.setItem('role',role);
        console.log(role);
        return user;
      }else {
        this.$state.go('login')
      }
    }
  }
}
