// JavaScript Document

$(document).ready(function() {
	rr();   
});


function rr(){
	/*$("#nav>ul>li").hover(
	function(){
		$(this).children("ul").show();
		},
	function(){
		$(this).children("ul").hide()
		}
	)*/
	$("#nav>ul>li").hover(
	function(){
$(this).children("ul").fadeToggle(600);
	}
	)

}
