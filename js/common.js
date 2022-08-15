// header
let state = 1;
$(window).on('scroll', function () {
  if ($(window).scrollTop() >= $('header').height() && state == 1) {
    state = 0;
    $('#navWrap').addClass('min').css({
      top: -130
    }).animate({
      top: 0
    }, 700)
    $('header>a.mobile').addClass('min');
    $('a.top_btn').animate({
      bottom: 50
    })
  } else if ($(document).scrollTop() < $('header').height() && state == 0) {
    state = 1;
    $('#navWrap').removeClass('min')
    $('header>a.mobile').removeClass('min');
    $('a.top_btn').animate({
      bottom: -70
    })
  }
})

// document.addEventListener('wheel', _.throttle(function (e) {
//   if ($(document).scrollTop() >= $('header').innerHeight()) {
//   if (e.wheelDelta < 0) {
//     $('#navWrap.min:not(:animated)').animate({
//       top: -130
//     }, 200)
//   } else if (e.wheelDelta > 0) {
//     $('#navWrap.min:not(:animated)').animate({
//       top: 0
//     }, 200)
//   }
// }
// }, 700));

$('header > a.mobile').on('click', function () {
  $('#m_navWrap').animate({
    right: 0
  })
})
$('#m_navWrap > a.mobile').on('click', function () {
  $('#m_navWrap').animate({
    right: '-80vw'
  })
})
$('#m_lnb .ul1 > li').on('click', function () {
  $(this).siblings('li').removeClass('onList');
  $(this).addClass('onList');
})

// TOP 버튼
$('a.top_btn').on('click', function (e) {
  e.preventDefault();
  $('#navWrap').css({
    top: 0
  });
  $('html, body').scrollTop($('#header'))
})

