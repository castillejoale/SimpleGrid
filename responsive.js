function responsive()
{
		//Conserve grid cell's height-width ratio
	var cellWidth = $('.cell').width();
	console.log(cellWidth);
	$('.cell').css({
	    'height': 1.778667*cellWidth + 'px'
	});

	//Conserve grid height based on cells height. Assuming above 1001px screenWidth there will be 3 elements, below, 2 elements.
	var cellHeight = $('.cell').height();
	var elements = $(".grid > div").length;
	var screenWidth = $(document).width();
	var divider = 3;
	if (screenWidth < 480){
		divider = 1;
	} else if (screenWidth < 1001){
		divider = 2;
	}
	var multiplier = Math.ceil(elements/divider);

	var paddingTop = parseInt($('.grid').css('padding-top'));
	var paddingBottom = parseInt($('.grid').css('padding-bottom'));
	var padding = paddingBottom + paddingTop;

	$('.grid').css({
	    'height': multiplier*cellHeight + padding + 'px'
	});
}

//Call for the first time
responsive();

//Call everytime the screen resizes
window.onresize = responsive;
