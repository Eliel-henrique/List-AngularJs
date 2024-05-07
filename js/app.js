
var app = angular.module("myShoppingList", []);

app.controller("myCtrl", function($scope, $timeout) {
  $scope.produtos = ["Leite", "Pão", "Queijo"];
  
  $scope.addItem = function() {
    if(!$scope.item){
      $scope.errortext = "Por favor, insira o nome do item antes de adicioná-lo à lista.";
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
  };

  
});

$(function(){
  $('#sortable').sortable({
    placeholder:"ui-state-highLight"
  });

  $('button').click(function(){
    $("ul").effect("bounce","2000")
  })

  $('span').click(function(){
    $("ul").effect("bounce","2000")
  })
})

$(document).ready(function(){
  $("div").effect("slide","slow")
})

