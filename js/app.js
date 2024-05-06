
var app = angular.module("myShoppingList", []);

app.controller("myCtrl", function($scope) {
  $scope.produtos = ["Leite", "Pão", "Queijo"];
  
  $scope.addItem = function() {
    if(!$scope.item){
      $scope.errortext = "Por favor, insira um item antes de adicionar à lista.";
      alert($scope.errortext)
      return;
    }
    if ($scope.produtos.indexOf($scope.item) == -1) {
      $scope.produtos.push($scope.item);
      $scope.item = "";
    } else {
      $scope.errortext = "Esse item já está em sua lista";
      alert($scope.errortext);
    }
  };
  
  $scope.removeItem = function(x) {
    $scope.produtos.splice(x, 1);
    // Adicionando o alerta aqui
    alert('Item removido com sucesso!');
  };

  
});
