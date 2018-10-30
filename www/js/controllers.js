angular.module('app.controllers', [])

.controller('pageCtrl', ['$scope', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {


}])

.controller('aaplCtrl', ['$scope', '$stateParams','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
  $http({
    method : "GET",
    url : "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=4DM8L0DQ97SWMRFD"
}).then(function mySuccess(response) {
    $scope.symbol = response.data["Global Quote"]["01. symbol"]
    $scope.stock = response.data["Global Quote"]["05. price"]
    $scope.previous = response.data["Global Quote"]["08. previous close"]
    $scope.date = response.data["Global Quote"]["07. latest trading day"]
    var a = $scope.stock;
    var b = $scope.previous;
    var res = a-b;
    $scope.dif = res;
    $scope.rec = "";
    if(res<0){
      $scope.rec = "Sell";
    }else if (res>0){
      $scope.rec = "Keep";
    }

}, function myError(response) {
  $scope.symbol = response.statusText;
  $scope.stock = response.statusText;
  $scope.previous = response.statusText;
  $scope.date = response.statusText;
  $scope.dif= response.statusText;
  $scope.rec= response.statusText;

})


}])

.controller('geCtrl', ['$scope', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
  $http({
    method : "GET",
    url : "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=GE&apikey=4DM8L0DQ97SWMRFD"
}).then(function mySuccess(response) {
    $scope.symbol = response.data["Global Quote"]["01. symbol"]
    $scope.stock = response.data["Global Quote"]["05. price"]
    $scope.previous = response.data["Global Quote"]["08. previous close"]
    $scope.date = response.data["Global Quote"]["07. latest trading day"]
    var a = $scope.stock;
    var b = $scope.previous;
    var res = a-b;
    $scope.dif = res;
    $scope.rec = "";
    if(res<0){
      $scope.rec = "Sell";
    }else if (res>0){
      $scope.rec = "Keep";
    }

}, function myError(response) {
  $scope.symbol = response.statusText;
  $scope.stock = response.statusText;
  $scope.previous = response.statusText;
  $scope.date = response.statusText;
  $scope.dif= response.statusText;
  $scope.rec= response.statusText;

})


}])

.controller('sbuxCtrl', ['$scope', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {

  $http({
    method : "GET",
    url : "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=SBUX&apikey=4DM8L0DQ97SWMRFD"
}).then(function mySuccess(response) {
    $scope.symbol = response.data["Global Quote"]["01. symbol"]
    $scope.stock = response.data["Global Quote"]["05. price"]
    $scope.previous = response.data["Global Quote"]["08. previous close"]
    $scope.date = response.data["Global Quote"]["07. latest trading day"]
    var a = $scope.stock;
    var b = $scope.previous;
    var res = a-b;
    $scope.dif = res;
    $scope.rec = "";
    if(res<0){
      $scope.rec = "Sell";
    }else if (res>0){
      $scope.rec = "Keep";
    }

}, function myError(response) {
  $scope.symbol = response.statusText;
  $scope.stock = response.statusText;
  $scope.previous = response.statusText;
  $scope.date = response.statusText;
  $scope.dif= response.statusText;
  $scope.rec= response.statusText;

})


}])

.controller('wbaCtrl', ['$scope', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {

  $http({
    method : "GET",
    url : "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=WBA&apikey=4DM8L0DQ97SWMRFD"
}).then(function mySuccess(response) {
    $scope.symbol = response.data["Global Quote"]["01. symbol"]
    $scope.stock = response.data["Global Quote"]["05. price"]
    $scope.previous = response.data["Global Quote"]["08. previous close"]
    $scope.date = response.data["Global Quote"]["07. latest trading day"]
    var a = $scope.stock;
    var b = $scope.previous;
    var res = a-b;
    $scope.dif = res;
    $scope.rec = "";
    if(res<0){
      $scope.rec = "Sell";
    }else if (res>0){
      $scope.rec = "Keep";
    }

}, function myError(response) {
  $scope.symbol = response.statusText;
  $scope.stock = response.statusText;
  $scope.previous = response.statusText;
  $scope.date = response.statusText;
  $scope.dif= response.statusText;
  $scope.rec= response.statusText;

})


}])
