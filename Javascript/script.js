/*global $, alert, console, mixitup*/

$(function () {
	"use strict";

	$(".plans .plan .bottom .item").each(function () {
        $(this).on("mouseenter", function () {
            $(this).find(".fa-question-circle").css({
                'color': '#ff8001'
            });
        });
    });
    
    $(".plans .plan .bottom .item").each(function () {
        $(this).on("mouseleave", function () {
            $(this).find(".fa-question-circle").css({
                'color': '#999'
            });
        });
    });
	
	
});






