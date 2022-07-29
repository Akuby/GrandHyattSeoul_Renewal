$('.promo-slider ul li').each(function() {
  $(this).css({backgroundImage:`url(../assets/offer-${$(this).index()+1}.png)`})
})
$('.rooms-slider li').each(function() {
  $(this).css({backgroundImage:`url(../assets/room-${$(this).index()+1}.png)`})
})