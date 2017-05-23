namespace App.View {
  angular.module('app.view', [
    'view.home',
    'view.about'
  ])





  export function getRole(jwtHelper, $state, $rootScope) {
    let role;
    let user;
    if (window.localStorage.getItem("token")) {
      user = jwtHelper.decodeToken(window.localStorage.getItem("token"));
      role = user.role;
      $rootScope.role = role;
      $rootScope.id = user.id;
      window.localStorage.setItem('role', role);
      console.log(role);
      return user;
    } else {
      $state.go('login')
    }
  }
}
