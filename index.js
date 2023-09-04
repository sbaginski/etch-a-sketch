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
      const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
      pixel.style.backgroundColor = color;
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