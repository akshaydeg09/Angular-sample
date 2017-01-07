app.controller("ctrl",function($scope){ 

  $scope.temperatures =[];
  
  $scope.recordTemperature = function(){
    if(!isNaN($scope.currentTemp)){
      $scope.temperatures.push(Number($scope.currentTemp));
      $scope.currentTemp='';
    }else{
      $scope.currentTemp='';
      alert("please enter valid temprature");
    }
  }
  
  $scope.getCurrentMedian = function(){
    if($scope.temperatures.length > 0)
      $scope.currentMedian = median($scope.temperatures);
  }
  
  function median(values) {
    values.sort( function(a,b) {return a - b;} );
    var half = Math.floor(values.length/2);
    if(values.length % 2)
        return values[half];
    else
        return (values[half-1] + values[half]) / 2.0;
  }
});



