var infoApp = angular.module('infoApp', [])
infoApp.controller("info", function($scope) {
    // creating the new user type object
    var UserObject = Parse.Object.extend("UserObject");
    var userAdd = new UserObject();
    // form submit function
    $scope.submitInfoForm = function() {
        alert($scope.form.fname + " - " + $scope.form.lname + " - " + $scope.form.email + " - " + $scope.form.occupation);
        // parse connection initialization
        Parse.initialize("parseservertesting", "Jujh@r9868");
        Parse.serverURL = 'https://serverparsetesting.herokuapp.com/parse'
        // creating the new user type object
        userAdd.set("firstName", $scope.form.fname);
        userAdd.set("lastName", $scope.form.lname);
        userAdd.set("email", $scope.form.email);
        userAdd.set("work", $scope.form.occupation);
        userAdd.set("active", '1');
        userAdd.save(null, {
            success: function(userAdd) {
                // Success statment
                $scope.userID = userAdd.id;
                alert('New object created with objectId: ' + userAdd.id);
            },
            error: function(userAdd, error) {
                // Fail Statement
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    }
    // fetch user details function
    $scope.getUserDetails = function() {
        var UserObject = Parse.Object.extend("UserObject");
        var query = new Parse.Query(UserObject);
        query.get($scope.userID, {
            success: function(userAdd) {
                // The object was retrieved successfully.
                $scope.dFname = userAdd.get("firstName");;
                $scope.dLnames = userAdd.get("lastName");
                $scope.dEmail = userAdd.get("email");
                $scope.dWork = userAdd.get("work");
            },
            error: function(object, error) {
                // Fail Statement
                alert('Failed to fetch new user object, with error code: ' + error.message);
            }
        });
    }
    // delete the user function
    $scope.deleteUserForm = function() {
        var UserObject = Parse.Object.extend("UserObject");
        userAdd.destroy({
            success: function(userAdd) {
                // The object was deleted from the Parse Cloud.
                alert('Deleted User');
            },
            error: function(userAdd, error) {
                // The delete failed.
                // error is a Parse.Error with an error code and message.
                alert('Sorry Cannot Delete');
            }
        });
    }
});
