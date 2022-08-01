$('.promo-slider ul li').each(function() {
  $(this).css({backgroundImage:`url(../assets/offer-${$(this).index()+1}.png)`})
})
$('.rooms-slider li').each(function() {
  $(this).css({backgroundImage:`url(../assets/room-${$(this).index()+1}.png)`})
})
$('.dining-slider li').each(function() {
  $(this).css({backgroundImage:`url(../assets/dining-${$(this).index()+1}.png)`})
})
$('#facilities article').each(function() {
  $(this).css({backgroundImage:`url(../assets/facilities-${$(this).index()+1}.png)`})
})
$('.posts a').each(function() {
  $(this).css({backgroundImage:`url(../assets/sns-${$(this).parent().index()+1}.png)`})
})
$('.posts a').each(function() {
  $(this).css({backgroundImage:`url(../assets/sns-${$(this).parent().index()+1}.png)`})
})
let rdWidth = parseInt($('#rooms').css('width'))*42/100;
$('#rooms svg line').attr('x2', rdWidth);
$('#dining svg line').attr('x1', rdWidth);