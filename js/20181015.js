$(function() {
    // #slideWrap ul li의 width, margin, #btns의 width
  var aniel = $('#slideWrap ul');//노출되는 컨텐츠너비
  var anielchild = $('#slideWrap ul li').width();
  var anielchildmargin = 5;
  var aniWidth = $("#slideWrap").width()/2;
  var aniSpeed = 400;//애니메이션 스피드
  var timeSet = 3000;//주기 단휘
  var dir = "-=";//왼쪽방향
  var anielchildW = aniWidth - (anielchildmargin*2);
  var slidWidth = $("#slideWrap")
  
  $('#btns').width($("#slideWrap").width() - (anielchildmargin*2))
  anielchild.width(anielchildW)
  anielchild.css({"margin-left":anielchildmargin,"magin-right":anielchildmargin});
  aniel.css("margin-left",-aniWidth);//제이쿼리로 위치
  
  var autoSetting=setInterval(function(){
	  aniRoll(dir);
	  },timeSet)
	 
  $("#btns  button").click(function(e) {
     clearInterval(autoSetting);//자동슬라이딩 삭제
	 	if($(this).hasClass('left')) dir="-=";  else dir="+=";
	  aniRoll(dir);
});	 
  
  function aniRoll(a){//선언위치는 중요하지않다
	aniel.animate({"marginLeft":a+aniWidth},aniSpeed,function(){
	  if(a == "-="){		
		$(" > :first-child",this).appendTo($(this))
	  }else{
		$(" > :last-child",this).prependTo($(this))
	  }
	aniel.css("margin-left",-aniWidth);//순서를 맨처음으로 돌려놓는 과정 안하면 li가 멀리가버릴수있다
		}); 
  }
});
