var item = "hello";
$(document).ready( function() {
	$(".toggle-nav").click( function() {
	var navigation = $("nav");
	if (navigation.hasClass("visible")) {
		navigation.removeClass("visible").addClass("hidden");
	} else {
		navigation.removeClass("hidden").addClass("visible");
	}
	});
	$('.language-filter li').click(function() {
		$("li.active").removeClass("active");
		$(this).addClass('active');
		item = "goodby";
	});
	console.log(item);
});


