$(document).ready(function () {
	var mySwiper = new Swiper('.swiper-team',{
	    loop: true,
		autoplay: 2000,
		height: 400,
        slidesPerView: 4,
        paginationClickable :true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
	});
	$('.swiper-button-prev').on('click', function(e){
	    e.preventDefault();
	    mySwiper.swipePrev();
        mySwiper.stopAutoplay();
        mySwiper.startAutoplay();
	})
	$('.swiper-button-next').on('click', function(e) {
	    e.preventDefault();
	    mySwiper.swipeNext();
        mySwiper.stopAutoplay();
        mySwiper.startAutoplay();
	})
})