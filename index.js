function addNewItem(){

	var listItem = document.createElement("LI");
	var todoInput = document.getElementById("todo-input");
    listItem.innerHTML = todoInput.value;
    document.getElementById("todo-list").appendChild(listItem);

    todoInput.value = "";
}

	$.ajax({
		type: 'POST',
		url: '/todos',
		datatype: 'json',
		success: function(data){
			console.log(data);

			var todoList = data.todoList

			for(var i=0; i<todoList.length; i++){
				var listItem = document.createElement("LI");
				listItem.innerHTML = todoList[i].content;
				document.getElementById("todo-list").appendChild(listItem);
			}
		},
		error: function(httpRequest, status, error){
			console.log(error);
		}
	});