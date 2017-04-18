app.controller('clickAndFuck', function($scope) {
    $scope.firstname = "Klikni a řeknu ti co právě děláš!";
    $scope.changeName = function() {
        $scope.firstname = "Marníš tu čas demente, tak si poklikej na tláčo";
    }
});