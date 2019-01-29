$(function(){
    var icon= [
                "http://pics.g9.co.kr/pc/cloud/hotdeal/ico-category-today-s.png",
                "http://image.g9.co.kr/i/2018/09/07/193e0e4bd3714e6a.png",
                "http://image.g9.co.kr/i/2018/09/28/5e1fa01e75af4c8d.png",
                "http://image.g9.co.kr/i/2018/09/07/6a960cf4a1ff47f1.png"
                   ];
    var iconText =["여성의류","해외직구","해외편집샵","투데이"];
	var iconlink =["today.html","global.html","shop.html","close.html"];
	var iconid =["iconText0","iconText1","iconText2","iconText3"]
	var iconclass = ["icon0","icon1","icon2","icon3"]
	
	var tag = "";
	for(var i in icon){
	tag +="<li id="+iconclass[i]+" ><img src="+icon[i]+" alt='"+iconText[i]+"' id="+iconid[i]+"><a href='"+iconlink[i]+"' title="+iconText[i]+"></a></li>"
		}
	
	$("#icon").html(tag)
    });


	
