$('#sub_rooms > h1').animate({
  opacity: 1,
  top: '40%'
}, 1000)
setTimeout(() => {
  $('#sub_rooms > p').animate({
    opacity: 1,
    top: '53%'
  }, 1000)
}, 200);

// room selection
$('#roomSelect ul li').on('click', function (e) {
  e.preventDefault()
  $(this).addClass('selected').siblings().removeClass('selected');
  let showName = $(this).data('sel')
  showName == 'all' ?
    $('section').css({
      height: 'auto'
    }) :
    $(`#${showName}`).css({
      height: 'auto'
    }).siblings('section').css({
      height: 0
    })
})

const swiper = new Swiper(".mySwiper", {
  grabCursor: true
});