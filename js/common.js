$('.promo-slider ul li').each(function () {
  $(this).css({
    backgroundImage: `url(../assets/offer-${$(this).index()+1}.png)`
  })
})
$('.rooms-slider li').each(function () {
  $(this).css({
    backgroundImage: `url(../assets/room-${$(this).index()+1}.png)`
  })
})
$('.dining-slider li').each(function () {
  $(this).css({
    backgroundImage: `url(../assets/dining-${$(this).index()+1}.png)`
  })
})
$('#facilities article').each(function () {
  $(this).css({
    backgroundImage: `url(../assets/facilities-${$(this).index()+1}.png)`
  })
})
$('.posts a').each(function () {
  $(this).css({
    backgroundImage: `url(../assets/sns-${$(this).parent().index()+1}.png)`
  })
})
let rdWidth = parseInt($('#rooms').css('width')) * 42 / 100;
$('#rooms svg line').attr('x2', rdWidth);
$('#dining svg line').attr('x1', rdWidth);


// 스크롤을 내릴 때는 없다가, 위로 올리면 내려오도록!
$(window).scroll(function () {
  if ($(window).innerWidth() > 599) {


    if ($(document).scrollTop() >= $('header').innerHeight()) {
      $('#navWrap').css({
        position: 'fixed'
      });
    } else if ($(document).scrollTop() < $('header').innerHeight()) {
      $('#navWrap').css({
        position: 'absolute'
      })
    }
  } 
})

$('#reserv_content .contWrap li').on('click', function () {
  $('#reserv_content .contWrap li').removeClass('selected')
  $(this).addClass('selected')
  $('#reserv_content .contWrap').prepend($(this))
})