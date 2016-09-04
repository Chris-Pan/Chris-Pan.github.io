// JavaScript Document
$(function(){ 
 ;(function(){ 
	 /*$('.banner02 ul li').each(function(index, element) {
		  var alive=index+1 
			$(element).css({'background-image':'url(images/banner0'+alive+'.png)'})
	});*/
			 var timer=null;
			 var num=0;
	   
		   timer=setInterval(action,1000)
		   
		   function action(){ 
			num++;
			if(num>3){
				 $('.banner02 ul').animate({left:-num*100+'%'},400).animate({left:0},0)
			num=0;
			
			$('.banner02 ol li').eq(num).addClass('current').siblings().removeClass()
			}
			$('.banner02 ul').animate({left:-num*100+'%'},500)
			$('.banner02 ol li').eq(num).addClass('current').siblings().removeClass()
	
	   }
	   action()
	 
	   $('.banner02').hover(function(e) {
		clearInterval(timer)
		},function(e){
			timer=setInterval(action,1000)
		});
		$('.banner02 ol li').mouseover(function(e) {
				 var index=$(this).index();
				 num=index;
			$('.banner02 ul').stop().animate({left:-num*100+'%'},500)
			$(this).addClass('current').siblings().removeClass();
		});
	 
	 
	 
	 
	 })();
  
})