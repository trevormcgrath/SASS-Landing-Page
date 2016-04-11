$( document ).ready(function() {

	var size = window.innerWidth;
	console.log("jQuery v1.12.0 loaded!");
	console.log(size);

    $('#fadeIn1').hide(0).fadeIn(1000);

    if(size>656){
    	$('#fadeIn2').hide(0).delay(1000).fadeIn(1000);
    }


});