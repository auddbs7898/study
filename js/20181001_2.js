$(document).ready(function(e) {
  $(".faq-wrap dt").click(function(e) {
	if(!$(this).hasClass('active')){
		$(".faq-wrap dt").removeClass("active");
  }
     $(this).toggleClass("active");
  });
});