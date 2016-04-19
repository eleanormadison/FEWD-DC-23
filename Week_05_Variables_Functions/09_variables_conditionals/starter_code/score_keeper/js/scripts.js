$(document).ready(function(){

	var score = 0;
	$("#add5").click(addFive);

	function addFive(){
		score = score +5;
		$("#result").html(score);
	}
	

	$("#add10").click(addTen);

	function addTen(){
		score = score +10;
		$('#result').html(score);
	}

	$("#sub1").click(subOne);

	function subOne(){
		score = score -1;
		$('#result').html(score);
	}

		$("#zero").click(zero);
	function zero(){
		score = 0;
		$('#result').html(score);
	}
});