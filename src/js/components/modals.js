let callbackModal = document.querySelector(".callback__modal");
let callbackBtn = document.querySelector(".callback__btn");
let callbackCross = document.querySelector(".callback__modal-close");
callbackBtn.onclick = function () {
	callbackModal.style.display = "flex";
	document.getElementsByTagName("body")[0].style.overflow = "hidden";
}
callbackCross.onclick = function () {
	callbackModal.style.display = "none";
	document.getElementsByTagName("body")[0].style.overflow = "visible";
}

let pricelistModal = document.querySelector(".pricelist__modal");
let pricelistBtn = document.querySelectorAll(".pricelist__btn");
let pricelistCross = document.querySelector(".pricelist__modal-close");
pricelistBtn.forEach(btn => {
	btn.onclick = function () {
		pricelistModal.style.display = "flex";
		document.getElementsByTagName("body")[0].style.overflow = "hidden";
	}
})
pricelistCross.onclick = function () {
	pricelistModal.style.display = "none";
	document.getElementsByTagName("body")[0].style.overflow = "visible";
}

let privacyModal = document.querySelector(".privacy__modal");
let privacyBtn = document.querySelectorAll(".privacy__btn");
let privacyCross = document.querySelector(".privacy__modal-close");
privacyBtn.forEach(btn => {
	btn.onclick = function () {
		privacyModal.style.display = "flex";
		document.getElementsByTagName("body")[0].style.overflow = "hidden";
	}
})
privacyCross.onclick = function () {
	privacyModal.style.display = "none";
	document.getElementsByTagName("body")[0].style.overflow = "visible";
}


window.onclick = function (event) {
	if (event.target == pricelistModal) {
		pricelistModal.style.display = "none";
		document.getElementsByTagName("body")[0].style.overflow = "visible";
	}
	if (event.target == callbackModal) {
		callbackModal.style.display = "none";
		document.getElementsByTagName("body")[0].style.overflow = "visible";
	}
	if (event.target == privacyModal) {
		privacyModal.style.display = "none";
		document.getElementsByTagName("body")[0].style.overflow = "visible";
	}
}
// document.querySelector('intro_btn').onclick = function () {
// 	document.querySelector('main').classList.toggle('main--main-bg');
// }