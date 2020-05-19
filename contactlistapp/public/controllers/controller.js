function AppCtrl($scope, $http){
    console.log("hi");

    var refresh = function(){
        $http.get('/contactlist').success(function(response){
            console.log('I got the data');
            $scope.contactlist = response;
            $scope.contact = "";
        });
    };

    refresh();

    $scope.addContact = function(){
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).success(function(response){
            console.log(response);
            refresh();
            window.location.reload();
        });
    };

    $scope.remove = function(id){
        console.log(id)
        $http.delete('/contactlist/'+id).success(function(response){
            window.location.reload();
        })
        
    }

    $scope.edit = function(id){
        console.log(id)
        $http.get('/contactlist/'+id).success(function(response){
            $scope.contact = response;
        })
    }
    $scope.update = function(id){
        console.log($scope.contact._id);
        $http.put('/contactlist/'+$scope.contact._id, $scope.contact).success(function(response){
            window.location.reload();
        })
    }

    // function myrefresh() {
    //     window.location.reload();
    // }
    // myrefresh();
}
// AppCtrl();