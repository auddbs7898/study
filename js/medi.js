$(function(e) {
	console.log("hi");
	var sns_ac = $(".lanBox .lanList");
    $(".lanBox .lanSel").click(function(e) {
		sns_ac.addClass("active");
		});
	 $(".lanBox .lanList").click(function(e) {
	   sns_ac.removeClass("active")
	 });
	 
	 var pos = [];
	 
	$(".quik li").click(function() {
        $(".section").each(function(i){
			 pos[i] = $(this).offset().top;
		 });
		 var num = $(this).index();
		 $(".quik li").removeClass("on");
		$(this).addClass("on");
		$("html,body").animate({scrollTop:pos[num]-150},500);
    });
}());


