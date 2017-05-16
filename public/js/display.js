var j =0;

function deleteItem(id){


	console.log(id);
	$.ajax({

		type: 'POST',
		url: '/delete',
		data: {
			_id:id
		},
		datatype:"json",
		success: function(){
			console.log("successfully sent");
		},
			error: function(httpRequest, status, error){
			console.log(error);
		}
		
	}).then(function (response) {
     	
     	successDisplay(response);

      //$('body').append(response);
    }).catch(function (err) {
      console.error(err);
    });
} 

function successDisplay(data){

//console.log(data.todoList);
	var todoList = data.todoList;

			
			for(var i=0; i<todoList.length; i++){
				var listItem = document.createElement("LI");
				listItem.innerHTML = todoList[i].content;
				listItem.id = "list"+(++j);

				 var closeB = document.createElement('button');
				  closeB.innerHTML ="x";
				  closeB.className = "close";
				  closeB.style.width = "20px";
				  closeB.style.float = "right";
				  listItem.style.width = "300px";
				  listItem.style.margin = "10px";
				  closeB.id = todoList[i]._id;
				document.getElementById("todo-list").appendChild(listItem);
				document.getElementById("list"+j).appendChild(closeB);
				//document.getElementById(todoList[i]._id).addEventListener('click',function(){ deleteItem(this.id);},false);
			//--------------------------------------
			$('#'+todoList[i]._id).on('click', function (event) {
  			 // event.preventDefault(); // Stop the form from causing a page refresh.
   				deleteItem(this.id);
    		 
			});


}

}