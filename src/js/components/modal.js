var modal = document.getElementById('header-modal');
var btn = document.getElementById("header-btn");
var cross = document.getElementsByClassName("header__modal-close")[0];
btn.onclick = function () {
	modal.style.display = "flex";
}
cross.onclick = function () {
	modal.style.display = "none";
}
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}