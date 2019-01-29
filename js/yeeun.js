$(document).ready(function(e) {
  $("#tab li").click(function(e) {
   $("#tab li").removeClass();
    $(this).addClass("on");
	$("#tabCon li").removeClass();
	$("#tabCon li").eq($(this).index()).addClass("on");
  });
});