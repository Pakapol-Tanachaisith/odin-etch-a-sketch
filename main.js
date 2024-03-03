const container = document.querySelector("#container");

// Generate grid
function createRow(width) {
  const row = document.createElement("div");
  row.classList.add("row");

  for (let i = 1; i <= width; i++) {
    const rowItem = document.createElement("div");
    rowItem.classList.add("row-item");

    rowItem.addEventListener("mouseover", () => {
      rowItem.style.backgroundColor = "#22d3ee";
    });

    row.appendChild(rowItem);
  }

  return row;
}

function createGrid(width = 16, height = 16) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  for (let i = 1; i <= height; i++) {
    container.appendChild(createRow(width));
  }
}

// Dimension
function setDimension() {
  const selectedWidth = prompt("Select width (max: 100px):");
  const newWidth = selectedWidth <= 100 ? selectedWidth : 100;

  const selectedHeight = prompt("Select Height (max: 100px):");
  const newHeight = selectedHeight <= 100 ? selectedHeight : 100;

  createGrid(newWidth, newHeight);
}

const dimensionBtn = document.querySelector("#dimension-btn");
dimensionBtn.addEventListener("click", setDimension);

// Create initial grid
createGrid();
