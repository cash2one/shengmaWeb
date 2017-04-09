$(document).ready(function(){

	//解决启动界面的二次渲染
	(function(){
		$('body').css('visibility','visible');
	})();
	
	//轮播图
	(function(){
		var bannerUl=$('#banner').find('ul');
		var timer=null;
		var iNow=0;
		timer=setInterval(function(){
			if (iNow==1) {
				bannerUl.animate({left:'0'}, 1000);
				iNow=0;
			}else{
				bannerUl.animate({left:'-6.4rem'}, 1000);
				iNow++;
			}
		},4000);
	})();
	
	//医院优势切换
	(function(){
		var oPic=$('#youshi').find('.content').find('.pic').find('img');
		var oUlLi=$('#youshi').find('.content').find('ul').find('li');//获取文字区域
		var iNow=0;
		oPic.mouseenter(function() {
			oUlLi.removeClass('native');
			iNow = $(this).index();
			oUlLi.eq(iNow).addClass('native');
		});
	})();

	//新闻切换
	(function(){
		var navbar=$('#news').find('.navbar').find('h1');
		var oUl=$('#news').find('ul');
		var iNow=0;

		navbar.mouseenter(function() {
			navbar.removeClass('native');
			oUl.removeClass('native');
			iNow=$(this).index();
			navbar.eq(iNow).addClass('native');
			oUl.eq(iNow).addClass('native');
		});
	})();
})