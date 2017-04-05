var app = angular.module('todoApp', ['ngMaterial']);
app.controller('todoCtrl', function todoCtrl($scope) {

	$scope.showsave = false;

	$scope.todos = [];
	$scope.todo = {};
	$scope.add = function(){

		$scope.todo = {
			todotask: $scope.todo.task
		}
		$scope.todos.push($scope.todo);
		$scope.todo= {};
	}

	$scope.delete =function(index){
		$scope.todos.splice(index, 1);
	}
	$scope.edit = function(index,item ){
		// console.log(index)
		$scope.showsave = true;
		$scope.todo.task = item.todotask; 
		$scope.id = index;
	}
	$scope.save = function(){
		$scope.showsave = false;
		$scope.todo = {
			todotask: $scope.todo.task
		}
		$scope.todos[$scope.id] = $scope.todo;
		console.log($scope.todo);
		
	}

})