 app.controller('maincontroller', function($scope){
     $scope.test = "I like angular"
     $scope.items = [];
    
     
     $scope.addItem = function() {
         if ($scope.newItem)
         $scope.items.push($scope.newItem);
         $scope.newItem="";
     };
     $scope.removeItem = function(index) {
         $scope.items.splice(index,1);
         
     }
 })
