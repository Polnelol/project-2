//pop menu
$(document).ready(function(){
	var touch = $('#mobile-nav');
		  var menu = $('.main-navigation');
		 
		  $(touch).on('click', function(e) {
		      e.preventDefault();
		      menu.slideToggle();
		  });
		  $(window).resize(function(){
		      var wid = $(window).width();
		      if(wid < 768 && menu.is(':hidden')) {
		          menu.removeAttr('style');
		      }
		  });
});

// slider
$(document).ready(function(){
	$('.bxslider').bxSlider({
   		nextText: '',
   		prevText: '',
   		pagerCustom: '#bx-pager',
   		nextSelector: '#bx-pager',
   		prevSelector: '#bx-pager',
   		touchEnabled: false
	});
});