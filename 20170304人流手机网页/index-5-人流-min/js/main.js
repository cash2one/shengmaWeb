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
		menuLi.click(function(){
			menuLi.removeClass('native');
			$(this).addClass('native');
			iNow=$(this).index();
			contentLi.removeClass('native');
			contentLi.eq(iNow).addClass('native');
		})				
	})();

	//十大标准
	(function(){
		var oLi=$('#sdbz').find('.content').find('li');
		var oP=$('#sdbz').find('.content').find('p');
		var iNow=0;
		oLi.click(function(){
			iNow=$(this).index();
			if(oP.eq(iNow).css('display')=='block'){
				oP.eq(iNow).css('display','none');
				$(this).find('h2').css({
					'background-image':'url(img/sdbz-right.png)',
					'background-size':'0.12rem 0.24rem'
				});

				$(this).find('span').css('visibility','visible')
				
			}
			else{
				oP.eq(iNow).css('display','block');
				
				$(this).find('h2').css({
					'background-image':'url(img/sdbz-down.png)',
					'background-size':'0.24rem 0.12rem'
				})

				$(this).find('span').css('visibility','hidden')
			}
		})
	})();
})