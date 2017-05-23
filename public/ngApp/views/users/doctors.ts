namespace App.View.Doctors {
    angular
        .module('view.doctors', [])
        .config(Doctors.configuration)
        .controller('doctorsController', Doctors.doctorsController)
  }
