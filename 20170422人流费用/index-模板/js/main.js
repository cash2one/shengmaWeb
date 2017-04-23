$(document).ready(function(){

	//解决启动界面的二次渲染
	(function(){
		$('body').css('visibility','visible');
	})();
	
	//套餐服务切换
	(function(){
		var menuLi=$('#private').find('.menu').find('li');
		var contentLi=$('#private').find('.content').find('li');
		var iNow=0;
		menuLi.mouseenter(function(){
			menuLi.removeClass('native');
			$(this).addClass('native');
			iNow=$(this).index();
			contentLi.removeClass('native');
			contentLi.eq(iNow).addClass('native');
		})				
	})();
})