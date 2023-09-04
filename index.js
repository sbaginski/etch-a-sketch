function changeGrid(container) {
  const newSize = +prompt("Enter new number of squares per side: (max 100)");
  container.replaceChildren();
  paintGrid(container, newSize);
}

function paintGrid(container, gridSize) {
  const pixels = [];
  for (let i = 0; i < gridSize**2; i++) {
    const pixel = document.createElement("div");
    const pixelSize = container.offsetWidth / gridSize;
    pixel.style.cssText = `min-width: ${pixelSize}px; height: ${pixelSize}px;`;
    pixel.classList.add("pixel");
    pixel.addEventListener("mouseover", () => {
      if (pixel.classList.contains("hovered")) {
        let color = pixel.style.backgroundColor;
        const rgb = color.split(",");
        for (let i = 0; i < rgb.length; i++) {
          rgb[i] = +rgb[i].replace(/\D/g, "");
          rgb[i] -= 26;
        }
        pixel.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
      } else {
        const r = Math.floor(Math.random() * 255).toString();
        const g = Math.floor(Math.random() * 255).toString();
        const b = Math.floor(Math.random() * 255).toString();
        pixel.style.backgroundColor = `rgb(${r},${g},${b})`;
        pixel.classList.add("hovered");
      }
    });
    pixels.push(pixel);
  }
  for (pixel of pixels) {
    container.appendChild(pixel);
  }
}

function main() {
  const DEFAULT_GRID_SIZE = 16;

  const button = document.querySelector("#title button");
  const container = document.querySelector("#container");

  button.addEventListener("click", () => {
    changeGrid(container);
  });
  paintGrid(container, DEFAULT_GRID_SIZE);
}

main()