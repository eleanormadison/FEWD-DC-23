$(document).ready(function() {

//Implement the red light using jQuery. Don't forget to add the script tags.
//stop is red when stop button is clicked//

/*thisif for loooooooooooong comments*/
var stopButtonId = '#stopButton';



$(stopButtonId).click(colorStopLight);
$('#slowButton').click(colorSlowLight);
$('#goButton').click(colorGoLight);


function colorStopLight(){
	$('#stopLight').css('backgroundColor','red');
	$('#slowLight,#goLight').css('backgroundColor',"black");
	
}


function colorSlowLight(){
	$('#slowLight').css('backgroundColor','yellow');
	$('#stopLight').css('backgroundColor','black');
	$('#goLight').css('backgroundColor',"black");
}


function colorGoLight(){
	$('#goLight').css('backgroundColor','green');
	$('#stopLight').css('backgroundColor','black');
	$('#slowLight').css('backgroundColor',"black");
}

});