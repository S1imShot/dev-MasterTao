$(document).ready(function () {
	$(".first-screen-slider").slick({
		dots: true,
		appendArrows: ".first-screen-nav",
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
				},
			},
		],
	});
});

const burger = document.querySelector(".hamburger");
burger.addEventListener("click", function () {
	burger.classList.toggle("is-active");
});
