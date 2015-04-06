$(document).foundation();
 $( document ).ready(function() {
 var lastScrollTop = 0;
 $(window).scroll(function() {
 if ($(this).scrollTop() >= 100) 
 {
 if($(this).scrollTop() < lastScrollTop)
 $('#header').css('position', 'fixed');
 $('#header').css('background', '#303435 ');

		
	   } else 
 {
 $('#header').css('position', 'absolute');
  $('#header').css('z-index', '99');
 $('#header').css('background', '');
 $('#header').css('opacity', '0.6');

 }
 lastScrollTop = $(this).scrollTop();
 });
});
