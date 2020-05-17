function AppCtrl($scope){
    console.log("hi");

    person1 = {
        name:"tim",
        email:"tim@gmail.com",
        number:"(111) 111-1111"
    };
    person2 = {
        name:"Emilly",
        email:"emilly@gmail.com",
        number:"(222) 111-1111"
    };
    person3 = {
        name:"Shuang",
        email:"Shuang@gmail.com",
        number:"(508) 615-3172"
    };

    var contactlist = [person1, person2, person3];
    $scope.contactlist = contactlist

}
// AppCtrl();