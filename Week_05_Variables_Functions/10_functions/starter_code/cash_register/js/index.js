$(document).ready(function() {
	//thisis the total of my register when i load page

	var total = 0; 

	$('#entry').submit(useRegister);

	function useRegister(event){
		event.preventDefault();
		

		//Get what the user has entered.
		var newEntry = $('#newEntry').val();
		$('#entries').html('<td>' + newEntry + '</td>');

		newEntry = parseInt(newEntry);
		total = total +newEntry
		console.log(total);

		$("#tital").html(total);


	}


});