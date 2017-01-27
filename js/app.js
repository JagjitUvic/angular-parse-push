var infoApp = angular.module('infoApp', [])
infoApp.controller("info", function($scope) {
    $scope.submitInfoForm = function() {
        alert($scope.form.fname + " - " + $scope.form.lname + " - " + $scope.form.email + " - " + $scope.form.occupation);
        Parse.initialize("Sxv6GhzEjNWqVPmQDxsbYTYIPvuRD8keZEOJmD1E", "vtlFvMd43MLSUJVgs2Y4VlRGaWEY8PJy8nyjWFXI");
        Parse.Push.send({
            channels: ["Global"],
            data: {
                alert: "Test Push Notification"
            }
        }, {
            success: function() {
                alert("Done");
            },
            error: function(error) {
                alert("Not Send");
            }
        });
    }
});
