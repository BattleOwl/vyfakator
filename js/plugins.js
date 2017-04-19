app.controller('ctrlClickAndFuck', function($scope) {
    $scope.firstname = "Jsem věštec, klikni SEM a řeknu ti co právě děláš!";
    $scope.changeName = function() {
        $scope.firstname = "Marníš tu čas demente...";
    }
});
