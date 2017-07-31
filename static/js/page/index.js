$(document).ready(function() {
    var mySwiper = new Swiper('.swiper-banner',{
	    loop: true,
		autoplay: 3000,
		height: 400,
		pagination: '.pagination',
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

    var swiper = new Swiper('.swiper-advantage', {
        scrollbar: '.swiper-scrollbar',
        paginationClickable: true,
        centeredSlides: true,
        slidesPerView: 4,
        watchActiveIndex: true
    });
})

