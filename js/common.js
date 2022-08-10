
let psliderImage = function() {
$('.promo-slider ul li').each(function () {
  if ($(window).innerWidth() < 899) {
    $(this).css({
      backgroundImage: `url(./assets/mobile_offer-${$(this).index()+1}.png)`
    })
  } else {
    $(this).css({
      backgroundImage: `url(./assets/offer-${$(this).index()+1}.png)`
    })
  }
})
};
psliderImage()
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
    backgroundImage: `url(./assets/sns-${$(this).parent().data('bg')}.png)`
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
let state = 1;
$(window).on('scroll', function () {
  if ($(window).scrollTop() >= $('header').height() && state == 1) {
    state =0;
    $('#navWrap').addClass('min').css({ top: -130 }).animate({ top: 0 }, 700)
    $('header>a.mobile').addClass('min');
    $('a.top_btn').animate({bottom: 50})
  } else if ($(document).scrollTop() < $('header').height() && state == 0 ) {
    state = 1;
    $('#navWrap').removeClass('min')
    $('a.top_btn').animate({bottom:-70})
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
// form
$('#reserv_content .contWrap li').on('click', function () {
  $('#reserv_content .contWrap li').removeClass('selected')
  $(this).addClass('selected')
  $('#reserv_content .contWrap').prepend($(this))
})
// special Offers
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
        marginLeft: 0
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
    slideLeft = $('.twin ul li').width() * ($(this).index());
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
let snsState;
// sns
let snsMoving = function (snsState) {
  if (snsState == 1) {
    for (let i = 0; i < 999; i++) {
      $('#sns .posts ul').animate({
        marginLeft: `-=${$('#sns .posts ul').children('li').width() * 2
      }`
      }, 8000, 'linear', function () {
        $(this).append($(this).children('li:nth-child(1)'));
        $(this).append($(this).children('li:nth-child(1)'));
        $(this).css({
          marginLeft: 0
        })
      })
    }
  } else if (snsState == 0) {return false}
  $('#sns .posts ul li').mouseenter(function () {
    snsState = 0;
  }).mouseleave(function () {
    snsState = 1;
  })
}

$('a.top_btn').on('click', function(e) {
  e.preventDefault();
  $('#navWrap').css({top:0});
  $('html, body').scrollTop($('#header'))
})

// 리사이즈
let resizing = function () {
  let winWidth = $(window).innerWidth();
  // special offer 영역 조절
  psliderImage()
  liLength = $('.promo-slider ul li').innerWidth() + 40;
  if (winWidth < 899) {
    $('.promo-slider').addClass('swiper mySwiper').append($('<div class="swiper-pagination"></div>'));
    $('.promo-slider ul').addClass('swiper-wrapper');
    $('.promo-slider ul li').each(function() {
      $(this).addClass('swiper-slide')
    })
    let swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
      });
  } else {
    $('.promo-slider').removeClass('swiper mySwiper').children('div.swiper-pagination').remove();
    $('.promo-slider ul').removeClass('swiper-wrapper');
    $('.promo-slider ul li').each(function() {
      $(this).removeClass('swiper-slide')
    })
  }

  // rooms, dining 영역 조절

  $('.rooms-slider').css({
    marginLeft: -$('.rooms-slider li').width() * $('.rooms-pagination a.on').index()
  })
  $('.dining-slider').css({
    marginLeft: -$('.dining-slider li').width() * $('.dining-pagination a.on').index()
  })
  twinWidth = parseInt($('.twin').css('width')) * 42 / 100;
  $('#rooms > svg line').attr('x2', twinWidth).css({
    strokeDasharray: twinWidth,
    strokeDashoffset: twinWidth
  });
  $('#dining > svg line').attr('x1', twinWidth).css({
    strokeDasharray: twinWidth,
    strokeDashoffset: twinWidth
  });

  if (winWidth < 899) {
    $('.twin-wrap').addClass('swiper mySwiper');
    $('.twin-wrap > ul').addClass('swiper-wrapper');
    $('.twin-wrap > ul > li').each(function() {
      $(this).addClass('swiper-slide')
    })
    let swiper = new Swiper(".mySwiper", {slidesPerView: "auto",
    centeredSlides: true});
  } else {
    $('.twin-wrap').removeClass('swiper mySwiper');
    $('.twin-wrap > ul').removeClass('swiper-wrapper');
    $('.twin-wrap > ul > li').each(function() {
      $(this).removeClass('swiper-slide')
    })
  }

  // facilities 영역 조절
  $('#facilities article').each(function () {
    if (winWidth < 899) {
      $(this).css({
        backgroundImage: `url(./assets/mobile_facilities-${$(this).index()+1}.png)`
      })
    } else {
      $(this).css({
        backgroundImage: `url(./assets/facilities-${$(this).index()+1}.png)`
      })
    }
  })

  // membership 영역 조절
  if (winWidth < 1200) {
    $('#membership svg line').attr({
      'y1': '220',
      'y2': '220'
    })
  }

  if (winWidth > 899) {
    snsState = 1;
  } else if (winWidth <= 899 ) {
    snsState = 0;
  }
  snsMoving(snsState);
}

resizing();
$(window).on('resize', resizing)


let curScr, esgPos, roomPos, dinPos, memPos;
// 스크롤
$(window).on('scroll', function () {
  curScr = $(document).scrollTop() - 200;
  esgPos = $('#ESG').position().top - $('#ESG').height();
  roomPos = $('#rooms').position().top - parseInt($('#rooms').css('marginTop'));
  dinPos = $('#dining').position().top - $('#dining').height();
  memPos = $('#membership').position().top - 900;
  if ($(window).innerWidth() > 1199 && curScr >= esgPos) {
    $('#ESG img').addClass('shadow-pulse')
  } else if (curScr < esgPos - 500) {
    $('#ESG img').removeClass('shadow-pulse')
  }
  if (curScr >= roomPos) {
    $('#rooms > svg line').css({
      animationName: 'lineMove',
      animationDuration: '2s',
      animationFillMode: 'forwards'
    })
  } else if (curScr < roomPos - 300) {
    $('#rooms > svg line').css({
      animationName: 'none'
    })
  }
  if (curScr >= dinPos) {
    $('#dining > svg line').css({
      animationName: 'lineMove',
      animationDuration: '2s',
      animationFillMode: 'forwards'
    })
  } else if (curScr < dinPos - 300) {
    $('#dining > svg line').css({
      animationName: 'none'
    })
  }
  if (curScr >= memPos) {
$('#membership svg line').css({
  animationName:'lineMove',
  animationDuration:'3s',
  animationFillMode:'forwards'
});
  } else if (curScr < memPos - 300) {
    $('#membership svg line').css({
      animationName:'none'
    })
  }
})
