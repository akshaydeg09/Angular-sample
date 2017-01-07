describe("Sample Test Suite", function() {
   var $scope = null;
  var ctrl = null;
  
  beforeEach(module('app'));

  
  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();

    ctrl = $controller('ctrl', {
      $scope: $scope
    });
  }));
  
  it("sample thrutiness test", function() {
    expect(true).toBeTruthy();
  });
  
  it("check if controller is defined", function() {
    expect(ctrl).toBeDefined();
  });
  
  it("check first data set", function() {
    $scope.temperatures = [5, 1, -7, 7, 8, 3];
    $scope.getCurrentMedian();
    expect($scope.currentMedian).toBe(4);
  });
  
  it("check second data set", function() {
    $scope.temperatures = [5, 1, -7, 7, 8, 3, 9];
    $scope.getCurrentMedian();
    expect($scope.currentMedian).toBe(5);
  });

});