$(document).ready(function(){

	//解决启动界面的二次渲染
	(function(){
		$('body').css('visibility','visible');
	})();
	
	(function(){

		focusFade(fenmian,3000);
		focusFade(shushi,3000);
		focusFade(zunchong,3000);
		focusFade(hehu,3000);

		//淡入淡出焦点图函数
		function focusFade(id,time){
			var oPic = $(id).find('li');
			var oSpot = $(id).find('div').find('span');
			var iNow = 0;
			var timer=null;

			//clearInterval(timer);
			
			autoPlay();

			oSpot.hover(function() {
				clearInterval(timer);
				iNow=$(this).index();
				fnFade();
			}, function() {
				autoPlay();
			});

			function autoPlay() {
				timer = setInterval(function(){
				fnFade();
				},time) 
			}

			function fnFade(){
				oPic.stop().fadeOut(1000).css('z-index', '1');
				oPic.eq(iNow).stop().fadeIn(1000).css('z-index', '2');
				oSpot.removeClass('active');
				oSpot.eq(iNow).addClass('active');
				(iNow == oPic.length-1)? iNow=0 : iNow++;
			}
		}
			
	})();
	
})