$(document).ready(function(){

	//解决启动界面的二次渲染
	(function(){
		$('body').css('visibility','visible');
	})();
	
	(function(){
			var oPic = $("#xiuyang").find('li');
			var oSpot = $("#xiuyang").find('.spot').find('span')
			var iNow = 0;
			var timer=null;
			
			clearInterval(timer);
			setInterval(function(){

			},1000) 

			function fnFade(){
				oPic.removeClass('active');
				oPic.eq(iNow).addClass('active');

			}

		/*
		function fadeIn(id){
			var oPic = $(id).find('li');
			var oSpot = $(id).find('.spot').find('span')
			var iNow = 0;
			var timer=null;

			setInterval(function(){

			},1000) 
		}
		*/
	})();
	
})