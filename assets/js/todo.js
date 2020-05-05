// Check off specific Todo
$("ul").on("click","li",function(){
	 $(this).toggleClass("done")
});

// Click on X to delete todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(750,function(){
		$(this).remove();
	});
	// To avoid event bubbling
	event.stopPropagation();
});

// Adding new Todos

$("input[type='text']").keypress(function(){
	if(event.which===13){
		let todoText = $(this).val();
		$(this).val("");
		// Create a new li and add to ul
	 	$("ul").append('<li><span><i class="far fa-window-close"></i></span> '+todoText+"</li>");
	}
});

$(".fa-pencil-alt").click(function(){
	$("input[type='text']").fadeToggle();
});