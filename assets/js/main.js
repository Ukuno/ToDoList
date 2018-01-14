//check off selected todo by checking
$("ul").on('click','li', function(){
	$(this).toggleClass('completed');
});

//click to delete list

$("ul").on('click','span',function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
	// propagation stops the event bubbling to the parent event
});

$("input[type='text']").on('keypress',function(event){
	if(event.which === 13){
		// grabs the new todo list 
		var addToDoList = $(this).val();
		// clears the input text 
		$(this).val("");
		//add to the list of todo list

		$("ul").prepend("<li><span><i class='fa fa-trash'></i></span> "+addToDoList+"</li>");

	}
});



$('.fa-bars').click(function(){
	$("input[type='text']").fadeToggle();
});