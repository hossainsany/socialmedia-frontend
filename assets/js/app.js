//adds post options overlay
let postDropdown = document.querySelectorAll(".post-dropdown-icon");
let postOverlay = document.querySelectorAll(".post-overlay");

for (let i = 0; i < postDropdown.length; i++) {
	postDropdown[i].addEventListener("click", () => {
		if (postOverlay[i].classList.contains("post-active")) {
			postOverlay[i].classList.remove("post-active");
		} else {
			postOverlay[i].classList.add("post-active");
		}
	});
}
