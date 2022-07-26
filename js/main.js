// 메인 문구 애니메이션
$('header > p').delay(1000).animate({
  opacity: 1
  // top: $('header').height() / 2 - 40
}, 1000, 'easeOutQuad')

// 메인화면 페이드아웃 슬라이더
$('header').children(':first').after('<div class="backgroundSlider"></div>');
$('.backgroundSlider')
.append('<div class="bg-wrap active"><div data-n="1"></div></div><div class="bg-wrap"><div data-n="2"></div></div><div class="bg-wrap"><div data-n="3"></div></div><div class="bg-wrap"><div data-n="4"></div></div>')

$('.backgroundSlider').children('div:eq(0)').animate({
  opacity:1
}, 10).css({transform:'scale(1.08)'});

setInterval(() => {
  $('.backgroundSlider').children('div:eq(1)').addClass('active').css({transform:'scale(1.1)'}).animate({
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
        backgroundImage: `url(./assets/mobile_offer-${$(this).index()+1}.webp)`
      })
    } else {
      $(this).css({
        backgroundImage: `url(./assets/offer-${$(this).index()+1}.webp)`
      })
    }
  })
};
psliderImage()
$('.rooms-slider li').each(function () {
  $(this).css({
    backgroundImage: `url(./assets/room-${$(this).index()+1}.webp)`
  })
})
$('.dining-slider li').each(function () {
  $(this).css({
    backgroundImage: `url(./assets/dining-${$(this).index()+1}.webp)`
  })
})
$('.posts a').each(function () {
  $(this).css({
    backgroundImage: `url(./assets/sns-${$(this).parent().data('bg')}.webp)`
  })
})
let faclBg = function() {
  $('#facilities article').each(function () {
  if ($(window).innerWidth() < 899) {
    $(this).css({
      backgroundImage: `url(./assets/mobile_facilities-${$(this).index()+1}.webp)`
    })
  } else {
    $(this).css({
      backgroundImage: `url(./assets/facilities-${$(this).index()+1}.webp)`
    })
  }
})
}
faclBg();

// form
$('#reserv_content li').on('click', function () {
  $(this).addClass('selected').siblings('li').removeClass('selected')
  $(this).parent().prepend($(this))
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
  if (winWidth > 1200 && stateSns == 1) {
    clearInterval(timer)
    stateSns = 2;
    timer = setInterval(snsMoving1, 10);
  } else if (winWidth <= 1200 && stateSns == 2) {
    clearInterval(timer)
    stateSns = 1;
    timer = setInterval(snsMoving2, 10);
  } else if (winWidth <= 899 && stateSns == 3) {
    clearInterval(timer)
    $('.posts ul').css({
      marginLeft: 'auto'
    })
  }
}
autoMoving($(window).width())

// 포스팅에 마우스 진입 시 멈춤
$('.posts ul li a').mouseenter(function() {
  clearInterval(timer)
}).mouseleave(function() {
  autoMoving($(window).width(), stateSns);
})

// 리사이즈
let resizing = function () {
  let winWidth = $(window).innerWidth();
  // backgroundSlider 삭제 및
  // special offer 영역 조절
  psliderImage()
  liLength = $('.promo-slider ul li').innerWidth() + 40;
  if (winWidth <= 899) { // 모바일 환경
    $('.backgroundSlider').hide()
    $('.promo-slider').addClass('swiper mySwiper1');
    $('.promo-slider ul').addClass('swiper-wrapper');
    $('.promo-slider ul li').each(function () {
      $(this).addClass('swiper-slide')
    })
    let swiper = new Swiper(".mySwiper1", {
      pagination: {
        el: ".swiper-pagination",
      },
    });
    $('.twin-wrap').addClass('swiper mySwiper2');
    $('.twin-wrap > ul').addClass('swiper-wrapper');

    $('.twin-wrap > ul > li').each(function () {
      $(this).addClass('swiper-slide').css({ width: '85vw'})
    })
    let swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: "auto",
      centeredSlides: true
    });
    $('#dining p').text('11개의 레스토랑과 바의 아름다운 야경을 즐기며 다양한 요리와 와인, 칵테일 등을 즐겨보시기 바랍니다.')
  } 
  else { // DESKTOP 환경
    $('.backgroundSlider').show()
    $('.promo-slider').removeClass('swiper mySwiper1').children('div.swiper-pagination').remove();
    $('.promo-slider ul').removeClass('swiper-wrapper');
    $('.promo-slider ul li').each(function () {
      $(this).removeClass('swiper-slide')
    });
    $('.twin-wrap').removeClass('swiper mySwiper2');
    $('.twin-wrap > ul').removeClass('swiper-wrapper');
    $('.twin-wrap > ul > li').each(function () {
      $(this).removeClass('swiper-slide')
    })
    $('#dining p').html('11개의 레스토랑과 바의 아름다운 야경을 즐기며<br>다양한 요리와 와인, 칵테일 등을 즐겨보시기 바랍니다.')
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

  // facilities 영역 조절
  faclBg();

  // membership 영역 조절
  if (winWidth < 1200) {
    $('#membership svg line:first-child').attr({
      'y1' : '0',
      'y2' : '0'
    })
    $('#membership svg line:last-child').attr({
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
$(window).on('resize',  _.debounce(function() {
  resizing();
}, 100))


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
