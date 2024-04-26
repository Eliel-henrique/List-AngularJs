var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope){
  $scope.produtos = ["Milk", "Bread", "Cheese"];
  $scope.addItem = function(){
    if($scope.produtos.indexOf($scope.item) == -1){
      $scope.produtos.push($scope.item);
    } else{
      $scope.errortext = "Esse item já esté em sua lista";
      alert($scope.errortext);
    }
  }
  $scope.removeItem = function(x){
    $scope.produtos.splice(x,1)
  }
});