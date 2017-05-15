namespace App {
    export function configuration(
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) {
        // Define routes
        $stateProvider
            .state('edit', {
                url: '/edit/:id',
                templateUrl: '/ngApp/views/editUser.html',
                controller: app.Controllers.EditUserController,
                controllerAs: 'controller'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'ngApp/views/login.html',
                controller: app.Controllers.LoginController,
                controllerAs: 'controller'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/ngApp/views/register.html',
                controller: app.Controllers.RegisterController,
                controllerAs: 'controller'
            })
            .state('patientVisit', {
                url: '/patientVisit',
                templateUrl: '/ngApp/views/patientVisit.html',
                controller: app.Controllers.PatientVisitController,
                controllerAs: 'controller'
            })
            .state('doctors', {
                url: '/doctors',
                templateUrl: '/ngApp/views/doctors.html',
                controller: app.Controllers.doctorsController,
                controllerAs: 'controller'
            })
            .state('patients', {
                url: '/patients',
                templateUrl: '/ngApp/views/patients.html',
                controller: app.Controllers.patientsController,
                controllerAs: 'controller'
            })
            .state('edit-visit', {
                url: '/edit-visit',
                templateUrl: '/ngApp/views/edit-visit.html',
                controller: app.Controllers.VisitListController,
                controllerAs: 'controller'
            })
            .state('nurses', {
                url: '/nurses',
                templateUrl: '/ngApp/views/nurses.html',
                controller: app.Controllers.nursesController,
                controllerAs: 'controller'
            })
            .state('patientVisits', {
                url: '/patientVisits',
                templateUrl: '/ngApp/views/patientVisits.html',
                controller: app.Controllers.VisitListController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        $urlRouterProvider.otherwise('/login');
        console.log(window.localStorage.getItem("token"));
        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    }
}