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

    // function myrefresh() {
    //     window.location.reload();
    // }
    // myrefresh();
}
// AppCtrl();