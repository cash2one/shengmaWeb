$(document).ready(function(){

	//解决启动界面的二次渲染
	(function(){
		$('body').css('visibility','visible');
	})();
	
	//套餐服务切换

	(function(){
		var menuLi=$('#anli').find('.menu').find('li');
		var mainLi=$('#anli').find('.main').find('li');
		var iNow=0;
		menuLi.mouseenter(function(){
			menuLi.removeClass('native');
			$(this).addClass('native');
			iNow=$(this).index();
			mainLi.removeClass('native');
			mainLi.eq(iNow).addClass('native');
		})				
	})();
	
	//检查焦点图
	(function(){
		var oPicUl=$('#jiancha').find('.pic');
		var oPicLi=$('#jiancha').find('.pic').find('li');
		var oSpotLi=$('#jiancha').find('.spot').find('li');
		var iNow=0;
		var timer=null;

		timer=setInterval(function(){
			fnMove();
		},6000)
		
		oPicUl.swipe({
			left:function(){
				fnMove();
			},
			right:function(){
				iNow-=2;
				fnMove();
			}
		})

		function fnMove(){
			/*
			oPicUl.stop().animate({
					left: -iNow * 6.4 +'rem'
				},1000)
			*/

			if (iNow>=4||iNow<0) {
				iNow=0;
				oPicUl.stop().animate({
					left: 0
				});
				oSpotLi.removeClass('native');
				oSpotLi.eq(iNow).addClass('native');
			}else{
				iNow++;
				oPicUl.stop().animate({
					left: -iNow * 6.4 +'rem'
				},600);
				oSpotLi.removeClass('native');
				oSpotLi.eq(iNow).addClass('native');
			}

		}
	})();
})