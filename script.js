const main = document.querySelector("main");

// generate grid
function createGrid(size) {
	main.innerHTML = ""; // hacky way to delete everything inside of <main>
	for (let y = 0; y < size; y++) {
		for (let x = 0; x < size; x++) {
			let div = document.createElement("div");
			div.style.backgroundColor = ["lightgray", "white"][(x + y) % 2];

			div.addEventListener("mouseenter", ()=>{
				div.animate([
					{filter: "brightness(0)"},
					{filter: "brightness(1)"},
				], {
					duration: 10000,
					iterations: 1,
				});
			});

			main.appendChild(div);
		}
	}

	main.style.setProperty('--size', size);
}

createGrid(16);
