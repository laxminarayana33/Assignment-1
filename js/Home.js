var app = angular.module('myApp', [])
app.controller('checkUpCtrl', function ($scope) {
  $scope.items = ''
  $scope.message = ''
  $scope.color = ''

  $scope.checkList = function () {
    if ($scope.items == '') {
      $scope.message = 'Please Enter Food Items'
      $scope.color = getColor(0)
      return
    }
    var itemSize = calculateItem($scope.items)
    function calculateItem(string) {
      var itemList = string.split(',')
      return itemList.length
    }

    if (itemSize > 3) $scope.message = 'That is too much of food'
    if (itemSize > 0 && itemSize <= 3) $scope.message = 'Enjoy The Food'

    $scope.color = getColor(itemSize)
    function getColor(itemSize) {
      var itemColor = 'green'
      if (itemSize <= 0) itemColor = 'red'
      return { color: itemColor }
    }
  }
})
