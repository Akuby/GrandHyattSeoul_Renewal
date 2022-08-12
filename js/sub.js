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
$('#roomSelect ul li').on('click', function(e) {
  e.preventDefault()
  $(this).siblings().removeClass('selected');
  $(this).addClass('selected')
})

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});