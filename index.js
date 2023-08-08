function main() {
  const CONTAINER_SIZE = 800;

  const container = document.querySelector("#container");
  let gridSize = 16;

  for (let i = 0; i < gridSize**2; i++) {
    const pixel = document.createElement("div");
    const pixelSize = CONTAINER_SIZE / gridSize;
    pixel.style.cssText = `min-width: ${pixelSize}px; height: ${pixelSize}px;`;
    pixel.classList.add("pixel");
    container.appendChild(pixel);
  }
}

main()