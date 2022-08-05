$('.promo-slider ul li').each(function () {
  $(this).css({
    backgroundImage: `url(./assets/offer-${$(this).index()+1}.png)`
  })
})
$('.rooms-slider li').each(function () {
  $(this).css({
    backgroundImage: `url(./assets/room-${$(this).index()+1}.png)`
  })
})
$('.dining-slider li').each(function () {
  $(this).css({
    backgroundImage: `url(./assets/dining-${$(this).index()+1}.png)`
  })
})
$('#facilities article').each(function () {
  $(this).css({
    backgroundImage: `url(./assets/facilities-${$(this).index()+1}.png)`
  })
})
$('.posts a').each(function () {
  $(this).css({
    backgroundImage: `url(./assets/sns-${$(this).parent().index()+1}.png)`
  })
})
window.addEventListener('resize', function() {
  $('#facilities article').each(function () {
    if ($(window).innerWidth() < 899) {
      $(this).css({
        backgroundImage: `url(./assets/mobile_facilities-${$(this).index()+1}.png)`
      })
    } else {
      $(this).css({
        backgroundImage: `url(./assets/facilities-${$(this).index()+1}.png)`
      })
    }
  })
} )

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

// specialOffers 슬라이더
// 리사이즈 할 때마다 변하도록 해줘야할까?
let liLength = $('.promo-slider ul li').innerWidth() + 40; // 40은 li의 좌우 마진값
let prevSliding = function() {
  $('.promo-slider ul:not(:animated)').prepend($('>li:last', $('.promo-slider ul'))).css({marginLeft:-liLength}).animate({marginLeft:0}, 500)
}
let nextSliding = function() {
  $('.promo-slider ul:not(:animated)').animate({marginLeft: -liLength}, 500, function() {
    $(this)
    .css({marginLeft: '0'})
    .append($('>li:first', $(this)))
  })
}
let numSliding = function() {
  $(this).addClass('on').siblings('a').removeClass('on');
  let slideLeft = ($('.twin ul li').innerWidth()) * ($(this).index());
  $(this).parent().prev().children('ul').stop().animate({marginLeft:-slideLeft}, 1000)
}
$('.promo-control .prev').on('click', prevSliding)
$('.promo-control .next').on('click', nextSliding)
$('.rooms-pagination a, .dining-pagination a').on('click', numSliding)