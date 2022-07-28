$('.promo-slider ul li').each(function() {
  $(this).css({backgroundImage:`url(../assets/offer-${$(this).index()+1}.png)`})
})