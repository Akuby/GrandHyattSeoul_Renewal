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





// header
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
// form
$('#reserv_content .contWrap li').on('click', function () {
  $('#reserv_content .contWrap li').removeClass('selected')
  $(this).addClass('selected')
  $('#reserv_content .contWrap').prepend($(this))
})
// specialOffers
let liLength = $('.promo-slider ul li').innerWidth() + 40;
let prevSliding = function () {
  $('.promo-slider ul:not(:animated)').prepend($('>li:last', $('.promo-slider ul'))).css({
    marginLeft: -liLength
  }).animate({
    marginLeft: 0
  }, 500)
}
let nextSliding = function () {
  $('.promo-slider ul:not(:animated)').animate({
    marginLeft: -liLength
  }, 500, function () {
    $(this)
      .css({
        marginLeft: '0'
      })
      .append($('>li:first', $(this)))
  })
}
// rooms, dining
let twinWidth = parseInt($('#rooms').css('width')) * 42 / 100;
let numState = 1;
let slideLeft;
let numSliding = function () {
  if (numState == 1) {
    numState = 0;
    slideLeft = ($('.twin ul li').innerWidth()) * ($(this).index());
    console.log(slideLeft)
    $(this).parent().prev().children('ul').stop().animate({
      marginLeft: -slideLeft
    }, 750);
    $(this).addClass('on').siblings('a').removeClass('on').children('span').animate({
      width: '0px',
      margin: '0px'
    }, 750);
    $(this).children('span').animate({
      width: '85px',
      margin: '0 10px'
    }, 750, function () {
      numState = 1;
    })
  }
}
$('.promo-control .prev').on('click', prevSliding)
$('.promo-control .next').on('click', nextSliding)
$('.rooms-pagination a, .dining-pagination a').on('click', numSliding)

// 리사이즈
let resizing = function () {

  // special offer 영역 조절
  liLength = $('.promo-slider ul li').innerWidth() + 40;

  // rooms, dining 영역 조절
  slideLeft = ($('.twin ul li').innerWidth()) * ($(this).index());
  console.log(slideLeft)
  // $('.twin-wrap').css({marginLeft: slideLeft})
  twinWidth = parseInt($('#rooms').css('width')) * 42 / 100;
  $('#rooms svg line').attr('x2', twinWidth);
  $('#dining svg line').attr('x1', twinWidth);
  

  // facilities 영역 조절
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
  // rooms
  
}
resizing();
$(window).on('resize', resizing)

