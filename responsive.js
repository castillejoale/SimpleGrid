function responsive()
{
	//Conserve grid cell's height-width ratio
	var cellWidth = $('.cell').width();

	//For apps
	$('.app').children().css({
	    'height': 1.778667*cellWidth + 'px'
	});

	//For projects
	$('.project').children().css({
	    'height': 0.562701*cellWidth + 'px'
	});

	//Conserve grid height based on cells height. Assuming above 1001px screenWidth there will be 3 elements, below, 2 elements.
	var screenWidth = $(document).width();
	var divider = 0;
	var paddingTop = parseInt($('.grid').css('padding-top'));
	var paddingBottom = parseInt($('.grid').css('padding-bottom'));

	$(".grid").each(function(){

		var cellHeight = $(this).children().height();
		var elements = $(this).children().length;
		
		if (screenWidth < 480){
			divider = 1;
		} else if (screenWidth < 1001){
			divider = 2;
		} else {
			divider = 3;
		}
		var multiplier = Math.ceil(elements/divider);

		$(this).css({
		    'height': multiplier*cellHeight + paddingTop + paddingBottom + 'px'
		});

	});

	//Set height of cellContent
	var marginTopCellContent = parseInt($('.cellContent').css('margin-top'));
	var marginBottomCellContent = parseInt($('.cellContent').css('margin-bottom'));
	var cellAppHeight = $('.app').children().height();
	var cellProjectHeight = $('.project').children().height();

	$(".cell").each(function(){

		if($(this).parent().is('.app')){
			$(this).children().css({
				    'height': cellAppHeight - marginTopCellContent - marginBottomCellContent + 'px'
			});
		} else if ($(this).parent().is('.project')){
			$(this).children().css({
				    'height': cellProjectHeight - marginTopCellContent - marginBottomCellContent + 'px'
			});
		}

	});

}

//Call for the first time
responsive();

//Call everytime the screen resizes
window.onresize = responsive;
