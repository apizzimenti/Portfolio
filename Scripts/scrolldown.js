/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    $('#topper').click(function () {
        $('.decision').slideDown(2000);
        $('.decision').css({'display': 'inline-block'});
    });
});