const main = document.querySelector("main");

// generate grid
function createGrid(size) {
	main.innerHTML = "";
	for (let y = 0; y < size; y++) {
		for (let x = 0; x < size; x++) {
			let div = document.createElement("div");
			div.style.backgroundColor = ["lightgray", "white"][(x + y) % 2];
			main.appendChild(div);
		}
	}
}

createGrid(16);
