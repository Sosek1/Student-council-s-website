const modal = document.getElementById("noteModal");
const btn = document.getElementById("note");

// Get the <span> element that closes the modal
const span = document.getElementById("closeModal");

// When the user clicks on the button, open the modal
btn.onclick = () => {
  	modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}