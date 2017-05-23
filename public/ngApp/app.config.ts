namespace App {
  export function configuration(
  $urlRouterProvider: ng.ui.IUrlRouterProvider,
  $locationProvider: ng.ILocationProvider,

)  {
  // Define routes


      $urlRouterProvider.otherwise('/login');
      // Enable HTML5 navigation
      $locationProvider.html5Mode(true);
};
}
