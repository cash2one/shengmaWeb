$(document).ready(function(){

	//解决启动界面的二次渲染
	(function(){
		$('body').css('visibility','visible');
	})();
	
	(function(){
		oLi=$('#zhuanjia').find('ul').find('li');
		oLi.click(function(event) {
			/* Act on the event */
			oLi.removeClass('active');
			$(this).addClass('active');
		});
	})();
	
})