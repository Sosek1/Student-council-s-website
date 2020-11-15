const modal = document.getElementById("noteModal");
const btn = document.getElementById("note");
const span = document.getElementById("closeModal");

btn.onclick = () => {
  	modal.style.display = "flex";
}

span.onclick = () => {
  	modal.style.display = "none";
}

window.onclick = (event) => {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}