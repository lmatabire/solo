namespace App.View.Patients {
    angular
        .module('view.patients', [])
        .config(Patients.configuration)
        .controller('patientsController', Patients.patientsController)
  }
