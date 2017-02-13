$(document).ready(function(){

 $('li').hover(function(){
   $(this).fadeTo("fast", 0.25);
 });

 $('li').mouseleave(function(){
    $(this).fadeTo("fast", 1.00);
 });

 $('li').click(function(){
   $(this).css('background-color', '#FF5100');
 });

$('li').click(function(){
  $(this).html("Clicked!");
});

$('.container').click(function(){
  $('img').animate({
    opacity: '1'
  },2000)});

})
