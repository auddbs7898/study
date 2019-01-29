/*절대 선택자로 가상선택자들은 선택될수없다
  제이쿼리로 생선된 객체(동적객체)는 태그에 실제로 없어도 선택자가 될 수 있다*/
$(document).ready(function(e) {
  $("#faq ul li").click(function(e) {
	 if(!$(this).hasClass('open')){//클릭당한 객체에 open클래스가 없다면
   		$("#faq ul li").removeClass("open");
	 }
	 $(this).toggleClass('open');
    //클릭객체가 open이라는 클래스가 토글된다
  });
});