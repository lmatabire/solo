var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        function getRole(jwtHelper, $state, $rootScope) {
            var role;
            var user;
            if (window.localStorage.getItem("token")) {
                user = jwtHelper.decodeToken(window.localStorage.getItem("token"));
                role = user.role;
                $rootScope.role = role;
                $rootScope.id = user.id;
                window.localStorage.setItem('role', role);
                console.log(role);
                return user;
            }
            else {
                $state.go('login');
            }
        }
        Controllers.getRole = getRole;
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
