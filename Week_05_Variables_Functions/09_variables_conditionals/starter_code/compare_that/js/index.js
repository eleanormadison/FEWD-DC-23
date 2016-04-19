$(document).ready(function(){

	var a;
	var b; 

	$('#submit').click(compareNumbers);

		function compareNumbers(){
			a = $('#a').val();
			b = $('#b').val();
			b = $('#b').val();
			b = parseInt(b);
			console.log(a);
			console.log(b);
		

			if (a>b){
			$('#comparison').html('>');


		}if(a<b){
			$('#comparison').html('<');
		}
		
		} else if(a=b){
				$('comparison').html('=');
			}
		}
});