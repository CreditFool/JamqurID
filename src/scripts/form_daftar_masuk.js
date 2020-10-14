function openForm(id) {
	document.getElementById(id).style.display = "block";
}

function closeForm(id) {
	document.getElementById(id).style.display = "none";
	console.log("tutup");
}

document.getElementById("btn-daftar").addEventListener("click", function() {
	openForm("form-daftar");
});

document.getElementById("daftar-close-btn").addEventListener("click", function() {
	closeForm("form-daftar");
});

document.getElementById("btn-masuk").addEventListener("click", function() {
	openForm("form-masuk");
});

document.getElementById("masuk-close-btn").addEventListener("click", function() {
	closeForm("form-masuk");
});