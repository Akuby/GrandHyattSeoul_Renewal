// 메인 문구 애니메이션
$('header > p').animate({
  opacity: 1,
  top: $('header').height() / 2 - 20
}, 1000, 'easeOutQuad')

// 메인화면 페이드아웃 슬라이더
$('header').children(':first').after('<div class="backgroundSlider"></div>');
$('.backgroundSlider')
.append('<div class="bg-wrap active"><div data-n="1"></div></div><div class="bg-wrap"><div data-n="2"></div></div><div class="bg-wrap"><div data-n="3"></div></div><div class="bg-wrap"><div data-n="4"></div></div>')

setInterval(() => {
  $('.backgroundSlider').children('div:eq(1)').addClass('active').css({transform:'scale(1.03)'}).animate({
    opacity: 1,
  }, 1800, function () {
    $(this).prev().css({
      opacity: 0,
      transform: 'scale(1)'
    }).removeClass('active').appendTo($(this).parent());
  });

}, 5800);

// 프로모션 슬라이더
let psliderImage = function () {
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
// form
$('#reserv_content li').on('click', function () {
  $(this).siblings('li').removeClass('selected')
  $(this).addClass('selected')
  $('#reserv_content').prepend($(this))
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
// sns
let stateSns;
let timer;
let snsMoving1 = function () {
  if (parseInt($('.posts ul').css('marginLeft')) <= -580) {
    $('.posts ul').append($('.posts ul li:first')).append($('.posts ul li:first')).css({
      marginLeft: 0
    })
  } else {
    $('.posts ul').css({
      marginLeft: '-=1'
    })
  }
}

let snsMoving2 = function () {
  if (parseInt($('.posts ul').css('marginLeft')) <= -520) {
    $('.posts ul').append($('.posts ul li:first')).append($('.posts ul li:first')).css({
      marginLeft: 0
    })
  } else {
    $('.posts ul').css({
      marginLeft: '-=1'
    })
  }
}

let autoMoving = function (winWidth, stateSns) {
  // console.log(winWidth, stateSns)
  if (winWidth > 1200 && stateSns == 1) {
    // console.log('start 1200이상')
    clearInterval(timer)
    stateSns = 2;
    timer = setInterval(snsMoving1, 10);
  } else if (winWidth <= 1200 && stateSns == 2) {
    // console.log('start 1200이하')
    clearInterval(timer)
    stateSns = 1;
    timer = setInterval(snsMoving2, 10);
  } else if (winWidth <= 899 && stateSns == 3) {
    clearInterval(timer)
    // console.log('stop 900 이하')
    $('.posts ul').css({
      marginLeft: 'auto'
    })
  }
}
autoMoving($(window).width())

$('.posts ul li a').mouseenter(function() {
  // console.log('on')
  clearInterval(timer)
}).mouseleave(function() {
  autoMoving($(window).width(), stateSns);
})
// 리사이즈
let resizing = function () {
  let winWidth = $(window).innerWidth();
  // backgroundSlider 삭제
  $('.backgroundSlider').css({display:'none'})
  // special offer 영역 조절
  psliderImage()
  liLength = $('.promo-slider ul li').innerWidth() + 40;
  if (winWidth <= 899) {
    $('.promo-slider').addClass('swiper mySwiper').append($('<div class="swiper-pagination"></div>'));
    $('.promo-slider ul').addClass('swiper-wrapper');
    $('.promo-slider ul li').each(function () {
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
    $('.promo-slider ul li').each(function () {
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
    $('.twin-wrap > ul > li').each(function () {
      $(this).addClass('swiper-slide')
    })
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true
    });
  } else {
    $('.twin-wrap').removeClass('swiper mySwiper');
    $('.twin-wrap > ul').removeClass('swiper-wrapper');
    $('.twin-wrap > ul > li').each(function () {
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

  // sns 애니메이션 조절
  if (winWidth > 1200) {
    stateSns = 1
  } else if (winWidth <= 1200 && winWidth > 899) {
    stateSns = 2
  } else if (winWidth <= 899) {
    stateSns = 3
  }
  autoMoving(winWidth, stateSns);
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
      animationName: 'lineMove',
      animationDuration: '3s',
      animationFillMode: 'forwards'
    });
  } else if (curScr < memPos - 300) {
    $('#membership svg line').css({
      animationName: 'none'
    })
  }
})