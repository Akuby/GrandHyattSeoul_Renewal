$('.promo-slider ul li').each(function() {
  $(this).css({backgroundImage:`url(../assets/offer-${$(this).index()+1}.png)`})
})
$('.rooms-slider li').each(function() {
  $(this).css({backgroundImage:`url(../assets/room-${$(this).index()+1}.png)`})
})
let roomsWidth = parseInt($('#rooms').css('width'))*48/100;
$('#rooms svg line').attr('x2', roomsWidth + '%'); // 안됌