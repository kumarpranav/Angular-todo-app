app.controller('todoTaskController',['$scope', 
	function($scope){

		$scope.model = {
			appName: 'Todo App',
			todoList: [],
			toDoTaskExist: false
		};
		$scope.addToDoTask = addToDoTask;
		$scope.deleteTodoTask = deleteTodoTask;
		$scope.resetAll = resetAll

		function addToDoTask(todo){
			if($scope.model.todoList.indexOf(todo) <= -1){
				$scope.model.todoList.push(todo);
			}else{
				$scope.model.toDoTaskExist = true;
			}
		}

		function deleteTodoTask(todo){
			console.log('todo', todo);
			console.log('index', $scope.model.todoList.indexOf(todo));
			console.log('Array', $scope.model.todoList);

			$scope.model.todoList.splice($scope.model.todoList.indexOf(todo),1);
		}

		function resetAll(){
			$scope.model.todoList = [];
		}
	}

])