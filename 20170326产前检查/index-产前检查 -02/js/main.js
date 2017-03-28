$(document).ready(function(){

	//解决启动界面的二次渲染
	(function(){
		$('body').css('visibility','visible');
	})();
	
	//时间
	(function(){
		var oLi=$('#shijian').find('.content').find('li');
		var oP=$('#shijian').find('.content').find('article');
		var iNow=0;
		oLi.click(function(){
			iNow=$(this).index();
			if(oP.eq(iNow).css('display')=='block'){
				$(this).removeClass('native');
				$(this).find('span').css('visibility','visible');
			}
			else{
				oLi.removeClass('native');
				oLi.find('span').css('visibility','visible');
				$(this).addClass('native');
				$(this).find('span').css('visibility','hidden');	
			}
		})
	})();
})