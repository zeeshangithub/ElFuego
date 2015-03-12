
$( document ).ready(function() {
  var lastScrollTop = 0;
$(window).scroll(function() {
       if ($(this).scrollTop() >= 100) 
       {
         if($(this).scrollTop() < lastScrollTop)
           $('.banner_content').css('position', 'fixed');
         $('.banner_content').css('background', '#303435 ');
		  $('.banner_content').css('height', '50');
		
       } else 
       {
           $('.banner_content').css('position', 'relative');
         $('.banner_content').css('background', '');
		 $('.banner_content').css('opacity', '0.6');
		 $('.banner_content').css('height', '50');
       }
   lastScrollTop = $(this).scrollTop();
   });
});
