var infoApp = angular.module('infoApp', [])
infoApp.controller("info", function($scope) {
    //form submit function
    $scope.submitInfoForm = function() {
        alert($scope.form.fname + " - " + $scope.form.lname + " - " + $scope.form.email + " - " + $scope.form.occupation);
        //parse connection initialization
        Parse.initialize("Sxv6GhzEjNWqVPmQDxsbYTYIPvuRD8keZEOJmD1E", "vtlFvMd43MLSUJVgs2Y4VlRGaWEY8PJy8nyjWFXI");
        //sending push notifications to the global channel
        Parse.Cloud.run('sendPush', {
            title: "Test Alert",
            alert: "Test Alert Body"
        }, {
            success: function(result) {
                alert(result);
            },
            error: function(error) {
                alert("Fail");
            }
        });
    }
});
