/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/

$(document).ready(function () {
	"use strict";
	$('.alert').click(function () {
		$('.alert').fadeOut(200);
		$('.csschange > .white, .black, .random').css({'opacity': '1'});
		$('.middle-container').css({'opacity': '1'});
	});
});