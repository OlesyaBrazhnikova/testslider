var swiper = new Swiper('.swiper', {
	breakpoints: {
		320: {
		  slidesPerView: 1.25,
		  spaceBetween: 10
		},
		640: {
		  slidesPerView: 2.25,
		  spaceBetween: 20
		},
		992: {
			slidesPerView: 3.25,
		  	spaceBetween: 20
		},
		1200: {
			slidesPerView: 4.25,
		  	spaceBetween: 30
		}
	  }
});