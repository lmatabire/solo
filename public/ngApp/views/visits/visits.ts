namespace App.Views.Visits {
    angular
        .module('view.visits', [])
        .config(Visits.configuration)
        .controller('PatientVisitController', Visits.PatientVisitController)
        .controller('VisitListController', Visits.VisitListController)
  }
