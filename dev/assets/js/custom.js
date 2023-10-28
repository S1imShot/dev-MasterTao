$(document).ready(function () {
	$(".first-screen-slider").slick({
		dots: true,
		arrows: false,
	});
});

const burger = document.querySelector(".hamburger");
burger.addEventListener("click", function () {
	burger.classList.toggle("is-active");
});
