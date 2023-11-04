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

document.getElementById("fileInput").onchange = function () {
	document.getElementById("file-name").innerHTML = this.value;
};

const checkButton = document.querySelectorAll('[type="checkbox"]');
checkButton.forEach((item, index) => {
	index === 0 ? item.closest(".input-box").classList.add("has-checkbox") : null;
});
