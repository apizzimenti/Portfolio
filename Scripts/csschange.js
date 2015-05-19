/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/

$(document).ready(function () {
    "use strict";
    var i = 1, setcolor, flag = true;
    
    $('.black').click(function () {
        $('body').css({'background-color': '#000'});
		$('body').css({'color': 'white'});
		$('a:link, a:hover, a:visited').css('color', 'white');
		$('.black').css({'color': '#fff'});
		$('.random').css({'background-color': 'white'});
		$('#topper, #bottomer').css({'color': 'white'});
		$('#copyright').css({'color': '#696969'});
		$('#colorWrapper').fadeOut(300);
		$('.alert').fadeOut(300);
		$('.want').fadeOut(300);
		$('.csschange > .white, .black, .random').css({'opacity': '1'});
		$('.middle-container').css({'opacity': '1'});
        
        flag = true;
    });

    $('.white').click(function () {
		$('body').css({'background-color': '#FFF'});
		$('body').css({'color': '#000'});
		$('a:link, a:hover, a:visited').css('color', 'black');
		$('#topper, #bottomer').css({'color': 'black'});
		$('#copyright').css({'color': '#A9A9A9'});
		$('#colorWrapper').fadeOut(300);
		$('.alert').fadeOut(300);
		$('.want').fadeOut(300);
		$('.csschange > .white, .black, .random').css({'opacity': '1'});
		$('.middle-container').css({'opacity': '1'});
        
        flag = true;
        
    });

    $('.random').click(function () {
		setcolor = getColor();
        var f;
		$('#newColor > p').remove();
		$('body').css({'background-color': setcolor});
		$('body').css({'color': '#000'});
		$('.random').css({'background-color': 'transparent'});
		$('a:link, a:hover, a:visited').css('color', 'black');
		$('#topper, #bottomer').css({'color': 'black'});
		$('#copyright').css({'color': 'black'});
		$('.csschange > .white, .black, .random').css({'opacity': '1'});
		$('.middle-container > p, ul, button, h1, h2').css({'opacity': '1'});
		$('#newColor').css({'border': '3px solid' + setcolor});
		
		if (i <= 1) {
			$('.alert').css({'box-shadow': '0px 0px 15px #000'});
			$('.alert').fadeIn(300);
            $('.alert').css({'opacity': '1'});
			$('.middle-container').css({'opacity': '0.2'});
			$('.csschange > .white, .black, .random').css({'opacity': '0.2'});
			
			for (f = 0; f < 4; f++) {
				$('.want').fadeOut(300);
				$('.want').fadeIn(300);
			}
		} else {
			$('.want').fadeIn(300);
			$('.middle-container').css({'opacity': '1'});
			$('.csschange > .white, .black, .random').css({'opacity': '1'});
			$('.alert').fadeOut(300);
		}
		i++;
		
		var newer = document.createElement('p'), brandNew = document.createTextNode(setcolor), newColor = document.getElementById('newColor');
		newer.appendChild(brandNew);
		newColor.appendChild(newer);
        
    });
	
	$('.want').click(function () {
        flag = !flag;
        
        $('.alert').fadeOut(500);
        $('.csschange > .white, .black, .random').css({'opacity': '1'});
        $('.middle-container').css({'opacity': '1'});

		if (flag) {
			$('#colorWrapper').fadeOut(500);
		} else {
            $('#colorWrapper').fadeIn(500);
        }
	});
    
    /*$('#changer').mouseenter(function () {
		var j;
		if (count <= 1) {
			for (j = 0; j < 3; j++) {
			$('.csschange').fadeOut(400);
			$('.csschange').fadeIn(400);
			}
			count++;
		} else {
			count++;
		}	
    });*/
});