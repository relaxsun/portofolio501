$(function(){
   $('ul a').click(function(){
       var id=$(this).attr('href');
       var position=$(id).offset().top-100;
       $('html,body').animate({
           'scrollTop':position
       },600)
   });

   $('.top-btn').click(function(){
       $('html,body').animate({
           'scrollTop':0
       },500)
   });

   $('.hum-open').click(function(){
       $('.hum-open').fadeOut();
       $('.hum-menu').fadeIn();
        });

        $('.fa-x').click(function(){
       $('.hum-menu').fadeOut();
       $('.hum-open').fadeIn();
        });
});