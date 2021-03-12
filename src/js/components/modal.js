var modal = document.querySelector(".header__modal");
var btn = document.querySelector(".header__btn");
var cross = document.querySelector(".header__modal-close");
btn.onclick = function () {
	modal.style.display = "flex";
	document.getElementsByTagName("body")[0].style.overflow = "hidden";
}
cross.onclick = function () {
	modal.style.display = "none";
	document.getElementsByTagName("body")[0].style.overflow = "visible";
}
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
		document.getElementsByTagName("body")[0].style.overflow = "visible";
	}

}
